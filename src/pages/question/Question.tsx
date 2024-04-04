import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import styles from "./question.module.scss"
import { useParams } from "react-router-dom";
import { AnswerKey, QuestionCard, SafeCloseDialog, Toggle } from "../../components";
import { apiInstance, useHTTP } from "../../utils";
import { QuestionModel } from "../../models";
import { AnswerType } from "../../models/answerType"
import { ArrowLeft, ChevronLeft, ChevronRight, Power } from "../../assets";

export const Question = () => {
    const { id } = useParams()
    const { error, data: questions, loading, get } = useHTTP<Array<QuestionModel>>(apiInstance)
    const [isAnswersShown, setIsAnswersShown] = useState(true)

    const dialogRef = useRef<HTMLDialogElement>(null)

    useLayoutEffect(() => {
        get('questions,json')
    }, [])

    return <div className={styles.__}>
        <SafeCloseDialog
            ref={dialogRef}
            title="Ayrılmak istediğine emin misin?"
            text="Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam edebilirsin."
            actions={{ submit: 'Testten Çık', cancel: 'Vazgeç' }}
            onSubmit={() => {console.log('')}}
        />
        <div className={styles.__header}>
            <div className={styles.__header__question}>
                <ArrowLeft />
                <h1>Konu Tarama Testi</h1>
            </div>
            <div className={styles.__header__answer}>
                <Toggle value={isAnswersShown} onChange={setIsAnswersShown} label="Cevapları Göster" />
                <button onClick={() => { dialogRef.current?.showModal() }}><Power /> Testi Bitir</button>
            </div>
        </div>
        <div className={styles.__content}>
            <div className={styles.__question}>
                <QuestionCard question={questions ? questions[0] : undefined} />
                <div className={styles.__question__actions}>
                    <button>
                        <ChevronLeft /> Önceki Soru
                    </button>
                    <button>
                        Sonraki Soru <ChevronRight />
                    </button>
                </div>
            </div>
            <div className={`${styles.__answers} ${!isAnswersShown ? styles['__answers--hidden'] : ''}`}>
                <AnswerKey title="Türkçe" answers={[AnswerType.A, AnswerType.B, AnswerType.C]} />
            </div>
        </div>
    </div>
};

export default Question