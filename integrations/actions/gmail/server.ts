"use server"
import nodemailer from 'nodemailer'

export interface EmailConf{
    user: string,
    password:string,
    host:string,
    to: string,
    subject: string,
    text: string,
    html: string
}
export async function sendEmail(emailConf:EmailConf){

    const transporter = nodemailer.createTransport({
        host: emailConf.host,
        auth: {
          user: emailConf.user,
          pass: emailConf.password,
        },
      })
    
    transporter.verify().then(console.log).catch(console.error);
    transporter.sendMail({
        from: emailConf.user, // sender address
        to: emailConf.to, // list of receivers
        subject: emailConf.subject, // Subject line
        text: emailConf.text, // plain text body
        html: emailConf.html, // html body
      }).then(info => {
        console.log({info});
      }).catch(console.error);
}
