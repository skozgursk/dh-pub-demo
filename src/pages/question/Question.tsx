import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef } from "react";
import styles from "./question.module.scss"
import { useParams } from "react-router-dom";
import { AnswerKey, QuestionCard } from "../../components";
import { apiInstance, useHTTP } from "../../utils";
import { QuestionModel } from "../../models";
import { AnswerType } from "../../models/answerType"
import { ArrowLeft } from "../../assets";

export const Question = () => {
    const { id } = useParams()
    const { error, data: questions, loading, get } = useHTTP<Array<QuestionModel>>(apiInstance)

    useLayoutEffect(() => {
        get('questions,json')
    }, [])

    return <div className={styles.__}>
        <div className={styles.__header}>
            <div className={styles.__header__question}>
                <ArrowLeft />
                <h1>Konu Tarama Testi</h1>
            </div>
            <div className={styles.__header__answer}>

            </div>
        </div>
        <div className={styles.__content}>
            <div className={styles.__question}>
                <QuestionCard question={questions ? questions[0] : undefined} />
                <div className={styles.__question__actions}></div>
            </div>
            <div className={styles.__answers}>
                <AnswerKey title="Türkçe" answers={[AnswerType.A, AnswerType.B, AnswerType.C]}  />
            </div>
        </div>
    </div>
};

export default Question