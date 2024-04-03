import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import styles from "./question.module.scss"
import { useParams } from "react-router-dom";

export const Question = () => {
    const { id } = useParams()

    return <div className={styles.__question}>
        {id}
    </div>
};

export default Question