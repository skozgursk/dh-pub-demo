import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import QuestionCardProps from "./QuestionCardProps";
import styles from "./questionCard.module.scss"

export const QuestionCard = forwardRef<HTMLDivElement, QuestionCardProps>((props, ref) => {

    return <div className={styles.__} ref={ref}></div>
});

export default QuestionCard