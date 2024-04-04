import { AnswerModel } from "./answerModel"
import { AnswerType } from "./answerType"

export interface QuestionModel {
    chapter: string
    order: number
    subText: string
    question: string
    answers: Array<AnswerModel>
    answer: AnswerType
}