import * as questionRepository from "../repositories/questionRepository.js"

export interface CreateQuestionData{
    question:string
}

async function newQuestion(question: string){
    await questionRepository.insert(question)
    return {message:"Nova pergunta salva."}
}

async function listQuestions(){
    const list = await questionRepository.list()
    return {
        questions: list
    }
}

async function getQuestion(id: number){
    const question = await questionRepository.selectById(id)
    return question
}

const questionService = {
    newQuestion,
    listQuestions,
    getQuestion
};
export default questionService;