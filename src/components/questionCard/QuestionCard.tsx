import { forwardRef, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "../";
import { Alert, Brush, CheckCirclePassive, ZoomIn, ZoomOut } from "../../assets";
import { AnswerType, StateModel } from "../../models";
import { add } from "../../store/quiz/quizSlice";
import QuestionCardProps, { AnswerStatus } from "./QuestionCardProps";
import styles from "./questionCard.module.scss";

export const QuestionCard = memo(forwardRef<HTMLDivElement, QuestionCardProps>(({ question }, ref) => {
    const [answerStatus, setAnswerStatus] = useState(AnswerStatus.None)
    const answers = useSelector((state: StateModel) => state?.quiz?.value)

    const dispatch = useDispatch()

    const handleClear = () => {
        console.log('clear')
    }

    const handleZoomIn = () => {
        console.log('clear')
    }

    const handleZoomOut = () => {
        console.log('clear')
    }

    const handleReport = () => {
        console.log('clear')
    }

    const handleAnswer = (answer: AnswerType) => {
        setAnswerStatus(answer === question?.answer ? AnswerStatus.Correct : AnswerStatus.Wrong)
        dispatch(add({ order: question.order, correctAnswer: question.answer, userAnswer: answer }))
    }

    useEffect(() => {
        if (!answers.some(item => item.order === question.order)) {
            setAnswerStatus(AnswerStatus.None)
        } else {
            const answer = answers.find(item => item.order === question.order)?.userAnswer
            setAnswerStatus(answer === question?.answer ? AnswerStatus.Correct : AnswerStatus.Wrong)
        }
    }, [question])

    const rightAnswerCalculator = (order: AnswerType) => {
        const userAnswer = answers.find(item => item.order === question.order)?.userAnswer

        if (order === userAnswer && answerStatus === AnswerStatus.Correct) {
            return styles['__answer--correct']
        } else if (order === userAnswer && answerStatus === AnswerStatus.Wrong) {
            return styles['__answer--wrong']
        } else if (answerStatus !== AnswerStatus.None && order === question?.answer) {
            return styles['__answer--correct']
        } else if (answerStatus !== AnswerStatus.None) {
            return styles['__answer--answered']
        }

        return ''
    }

    return <div className={styles.__} ref={ref}>asd
        <div className={styles.__header}>
            <div className={styles.__header__tag}>Soru: {question.chapter} #{question.order}</div>
            <div className={styles.__header__actions}>
                <IconButton onClick={handleClear} icon={Brush} ariaLabel="Temizle" />
                <IconButton onClick={handleZoomIn} icon={ZoomIn} ariaLabel="Yaklaş" />
                <IconButton onClick={handleZoomOut} icon={ZoomOut} ariaLabel="Uzaklaş" />
                <IconButton onClick={handleReport} icon={Alert} ariaLabel="Raporla" />
            </div>
        </div>
        <p className={styles.__subText}>{`"${question.subText}"`}</p>
        <p className={styles.__question}><b>{question.question}</b></p>
        <div className={styles.__answer__container}>
            {question.answers.map(item => {
                return <div key={`question-${question.order}-answer-${item.order}`} className={`${styles.__answer} ${rightAnswerCalculator(item.order)}`}>
                    <CheckCirclePassive className={styles.__answer__} />
                    <p className={styles.__answer__option}>{`${item.order})`}</p>
                    <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                    <div className={styles.__answer__actions}><button onClick={() => { handleAnswer(item.order) }}>Cevapla</button></div>
                </div>
            })}
        </div>

    </div>
}));