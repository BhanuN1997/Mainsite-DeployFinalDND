// "use server"
import {OpenAI} from 'langchain/llms/openai'
import {PromptTemplate} from 'langchain/prompts'
import {LLMChain} from 'langchain/chains'

async function classifyData(model:OpenAI,data:string,userPrompt:string){
    const template = `You are a classifier, you classify the following body of the mail: ${data} ` + userPrompt
    const prompt= new PromptTemplate({inputVariables: ["data"], template: template})
    const chain=new LLMChain({ llm: model, prompt: prompt})
    const output = await chain.call({ data })
    console.log(output)
    return output.text
}

export async function sendOpenAIRequest(apiKey:string,data:string,prompt:string){
    const model=new OpenAI({openAIApiKey: apiKey})
    let option='classify'

    switch(option){
        case 'classify':
            console.log('inside classify')
            const output=await classifyData(model,data,prompt)
            return output
    }
}
