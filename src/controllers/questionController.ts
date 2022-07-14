import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const {question} = req.body 
  const result = await questionService.newQuestion(question)  
  return res.status(201).json(result)
}

export async function answer(req: Request, res: Response) {
  const {answer} = req.body
  const {id} = req.params
  const result = await answerService.newAnwer(answer, parseInt(id))
  return res.status(201).json(result)
}

export async function get(req: Request, res: Response) {
  const result = await questionService.listQuestions()
  return res.status(200).json(result)
}

export async function getById(req: Request, res: Response) {
  const {id} = req.params
  const result = await questionService.getQuestion(parseInt(id))
  return res.status(200).json(result)
}
