import answerRepository from "../repositories/answerRepository.js";

export interface CreateAnswerData{
    answer:string,
    questionId: number
}

async function newAnwer(answer: string, questionId: number){
    await answerRepository.insert(answer, questionId)
    return {message:"Nova resposta salva."}
}

const answerService = {
    newAnwer
};
export default answerService;