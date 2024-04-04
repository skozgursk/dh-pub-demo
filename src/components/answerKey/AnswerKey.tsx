import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Ders } from "../../assets";
import { StateModel } from "../../models";
import { AnswerType } from "../../models/answerType";
import AnswerKeyProps from "./AnswerKeyProps";
import styles from "./answerKey.module.scss";

export const AnswerKey = forwardRef<HTMLDivElement, AnswerKeyProps>(({ questionCount, title }, ref) => {
    const answers = useSelector((state: StateModel) => state?.quiz?.value)
    const { id } = useParams()

    const correctAnswerCheck = (option: AnswerType, index: number) => {
        const answer = answers.find(item => item.order === (index + 1))

        if (answer && option === answer.correctAnswer) {
            return styles['__option--correct']
        }

        return ''
    }

    return <div className={styles.__} ref={ref}>
        <div className={styles.__header}>
            <Ders />
            <div>
                <h6>
                    {title}
                </h6>
                <span>{answers.length} Soru</span>
            </div>
        </div>
        <div className={styles.__answers}>
            <div className={styles.__answers__container}>
                {Array.from(Array(questionCount), (answer, index) => {
                    return <div key={`answer-${index}`} className={`${styles.__answer} ${index === parseInt(id ?? "0") - 1 ? styles['__answer--active'] : ''} `}>
                        <p>{(index + 1)}. Soru</p>
                        <div className={styles.__option__container}>
                            {Object.keys(AnswerType).map(item => {
                                return <div key={`answer-${item}-of-index`} className={`${styles.__option} ${correctAnswerCheck(item as AnswerType, index)}`}>{item}</div>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>

    </div>
});

export default AnswerKey