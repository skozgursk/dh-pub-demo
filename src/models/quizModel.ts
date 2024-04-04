import { AnswerType } from "./answerType";


export interface QuizValueModel {
    order: number,
    userAnswer: AnswerType,
    correctAnswer: AnswerType
}

export interface QuizModel {
    value: Array<QuizValueModel>
}