import { EventHandler, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import QuestionCardProps from "./QuestionCardProps";
import styles from "./questionCard.module.scss"
import { Alert, Brush, CheckCirclePassive, ZoomIn, ZoomOut } from "../../assets";
import Loading from "../loading/Loading";
import IconButton from "../iconButton/IconButton";
import SafeCloseDialog from "../safeCloseDialog/SafeCloseDialog";

export const QuestionCard = forwardRef<HTMLDivElement, QuestionCardProps>(({ question }, ref) => {



    const handleClear = (e: any) => {
        console.log('clear')
    }

    const handleZoomIn = (e: any) => {
        console.log('clear')
    }

    const handleZoomOut = (e: any) => {
        console.log('clear')
    }

    const handleReport = (e: any) => {
        console.log('clear')
    }

    return <div className={styles.__} ref={ref}>

        {question ? <>
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
                    return <div className={styles.__answer}>
                        <CheckCirclePassive className={styles.__answer__} />
                        <p className={styles.__answer__option}>{`${item.order})`}</p>
                        <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                        <div className={styles.__answer__actions}><button>Cevapla</button></div>
                    </div>
                })}
            </div>
        </> : <Loading />}

    </div>
});

export default QuestionCard