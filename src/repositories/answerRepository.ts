import prisma from "../config/database.js"

export async function insert(answer: string, questionId: number){
    await prisma.answer.create({
        data:{
            answer: answer,
            questionId: questionId
        }
    })
}

const answerRepository = {
    insert
}

export default answerRepository