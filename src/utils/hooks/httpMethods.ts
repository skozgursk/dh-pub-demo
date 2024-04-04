import { QuestionModel } from "../../models";
import { apiInstance } from "../httpBase";

export const getQuestions = async (): Promise<Array<QuestionModel>> => {

    const response = await apiInstance<null,  Array<QuestionModel>>({
        url: "questions",
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return response as unknown as Array<QuestionModel>;
};