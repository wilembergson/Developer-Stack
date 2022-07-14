import prisma from "../config/database.js"

interface Question{
    questions: string
}

export async function insert(question: string){
     await prisma.question.create({
        data: {
            question: question
        }
    })
}

export async function list(){
    return await prisma.question.findMany()
}

export async function selectById(id: number){
    return await prisma.question.findUnique({
        where:{
            id:id
        },
        include: {
            Answer:{
                where:{
                    questionId:id
                },
                select:{
                    answer:true
                }
            }
        }   
    })
}