import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import AnswerKeyProps from "./AnswerKeyProps";
import styles from "./answerKey.module.scss"
import { AnswerType } from "../../models/answerType";
import { Ders } from "../../assets";

export const AnswerKey = forwardRef<HTMLDivElement, AnswerKeyProps>(({ answers, title }, ref) => {

    const correctAnswerCheck = (option: string, index: number) => {
        if (index < answers.length && option === answers[index]) {
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
                {Array.from(Array(15), (answer, index) => {
                    return <div className={`${styles.__answer} ${index === answers.length - 1 ? styles['__answer--active'] : ''} `}>
                        <p>{(index + 1)}. Soru</p>
                        <div className={styles.__option__container}>
                            {Object.keys(AnswerType).map(item => {
                                return <div className={`${styles.__option} ${correctAnswerCheck(item, index)}`}>{item}</div>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>

    </div>
});

export default AnswerKey