import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import AnswerKeyProps from "./AnswerKeyProps";
import styles from "./answerKey.module.scss"

export const AnswerKey = forwardRef<HTMLDivElement, AnswerKeyProps>((props, ref) => {

    return <div className={styles.__} ref={ref}></div>
});

export default AnswerKey