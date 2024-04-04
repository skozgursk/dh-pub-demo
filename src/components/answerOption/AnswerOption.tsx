import { forwardRef, memo, useMemo } from "react";
import AnswerOptionProps from "./AnswerOptionProps";
import styles from "./answerOption.module.scss";
import { useSelector } from "react-redux";
import { StateModel } from "../../models";

export const AnswerOption = memo(forwardRef<HTMLElement, AnswerOptionProps>(({ item, index }, ref) => {

    const answers = useSelector((state: StateModel) => state?.quiz?.value)

    const correctAnswerCheck = useMemo(() => {
        const answer = answers.find(item => item.order === (index + 1))

        if (answer && item === answer.correctAnswer) {
            return styles['__option--correct']
        }

        return ''
    }, [answers, item, index])

    return <div className={`${styles.__option} ${correctAnswerCheck}`}>{item}</div>
}));