import { useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Power } from "../../assets";
import { AnswerKey, Loading, QuestionCard, SafeCloseDialog, Toggle } from "../../components";
import { QuestionModel } from "../../models";
import { getQuestions } from "../../utils";
import styles from "./question.module.scss";
import { createPortal } from "react-dom";

export const Question = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: questions, isLoading } = useQuery<Array<QuestionModel>, Error>('questions', getQuestions);

    const [isAnswersShown, setIsAnswersShown] = useState(true)

    const dialogRef = useRef<HTMLDialogElement>(null)

    return <div className={styles.__}>
        <Loading isOpen={isLoading} />
        {createPortal(<SafeCloseDialog
            ref={dialogRef}
            title="Ayrılmak istediğine emin misin?"
            text="Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam edebilirsin."
            actions={{ submit: 'Testten Çık', cancel: 'Vazgeç' }}
            onSubmit={() => { navigate('/') }}
        />, document.body)}

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

                {questions?.find(item => item.order === parseInt(id ?? '0')) &&
                    <QuestionCard question={questions?.find(item => item.order === parseInt(id ?? '0')) as QuestionModel} />
                }

                <div className={styles.__question__actions}>
                    <Link to={`/question/${(parseInt(id ?? '0') - 1) > 0 ? (parseInt(id ?? '0') - 1) : 1}`}>
                        <ChevronLeft /> Önceki Soru
                    </Link>
                    <Link to={`/question/${(parseInt(id ?? '0') + 1) <= (questions?.length ?? 0) ? (parseInt(id ?? '0') + 1) : questions?.length}`}>
                        Sonraki Soru <ChevronRight />
                    </Link>
                </div>
            </div>
            <div className={`${styles.__answers} ${!isAnswersShown ? styles['__answers--hidden'] : ''}`}>
                <AnswerKey title="Türkçe" questionCount={questions?.length ?? 0} />
            </div>
        </div>
    </div>
};

export default Question