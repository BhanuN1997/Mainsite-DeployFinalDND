"use server"
import {OpenAI} from 'langchain/llms/openai'
import {PromptTemplate} from 'langchain/prompts'
import {LLMChain} from 'langchain/chains'

async function classifyData(model:OpenAI,data:string){
    const template = `You are a classifier, you classify the following body of the mail: ${data} into\
                           two classes, which are 'CUSTOMER COMPLAINT' and 'ORDER CONFIRMATION', IMPORTANT: strictly output '1' for 'CUSTOMER COMPLAINT'\
                           and '2' for 'ORDER CONFIRMATION'`;
    const prompt= new PromptTemplate({inputVariables: ["data"], template: template})
    const chain=new LLMChain({ llm: model, prompt: prompt})
    const output = await chain.call({ data })
    console.log(output)
    return output.text
}

export async function sendOpenAIRequest(apiKey:string,data:string){
    const model=new OpenAI({openAIApiKey: apiKey})
    let option='classify'

    switch(option){
        case 'classify':
            console.log('inside classify')
            const output=await classifyData(model,data)
            return output
    }
}