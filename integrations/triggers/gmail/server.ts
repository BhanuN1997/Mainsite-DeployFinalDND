"use server"
import Imap from 'imap';
import { simpleParser } from 'mailparser';

export interface ImapConf{
    user: string,
    password:string,
    host:string,
    port:number,
    tls:boolean,
    tlsOptions:{
        rejectUnauthorized:boolean
    }
}

export async function getgmailinbox(imapConfig:ImapConf) {
    

    return new Promise((resolve, reject) => {
        const imap = new Imap(imapConfig);
        
        imap.once('ready', () => {
            imap.openBox('INBOX', true, () => {
                imap.search(['UNSEEN', ['SINCE', new Date()]], (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    
                    const f = imap.fetch(res[res.length - 1], { bodies: '' });
                    f.on('message', msg => {
                        msg.on('body', (stream:any) => {
                            simpleParser(stream, async (err, parsed) => {
                                if (err) {
                                    reject(err);
                                    return;
                                }
                                console.log(parsed)
                                resolve(parsed);
                            });
                        });
                        msg.once('attributes', attrs => {
                            const { uid } = attrs;
                            imap.addFlags(uid, ['\\Seen'], () => {
                                console.log('Marked as read!');
                            });
                        });
                    });
                    f.once('error', ex => {
                        reject(ex);
                    });
                    f.once('end', () => {
                        console.log('Done fetching all messages!');
                        imap.end();
                    });
                });
            });
        });

        imap.once('error', err => {
            reject(err);
        });

        imap.once('end', () => {
            console.log('Connection ended');
        });

        imap.connect();
    });
}