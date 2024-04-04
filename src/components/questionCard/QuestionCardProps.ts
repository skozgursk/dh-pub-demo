import { QuestionModel } from "../../models";

export default interface QuestionCardProps {
    question: QuestionModel
}

export enum AnswerStatus {
    "None",
    "Correct",
    "Wrong"
}