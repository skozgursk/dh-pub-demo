import { forwardRef, memo, useCallback, useImperativeHandle, useRef } from "react";
import { AlertCircle, Close } from "../../assets";
import { IconButton } from "../";
import SafeCloseDialogProps from "./SafeCloseDialogProps";
import styles from "./safeCloseDialog.module.scss";

export const SafeCloseDialog = memo(forwardRef<HTMLDialogElement, SafeCloseDialogProps>(({ title, text, actions, onSubmit }, ref) => {


    const localRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => localRef.current!, [localRef]);

    const handleClose = useCallback(() => {
        localRef.current?.close()
    }, [])

    return <dialog className={styles.__} ref={localRef}>
        <div className={styles.__container}>
            <IconButton icon={Close} ariaLabel="Kapat" onClick={handleClose} className={styles.__close} />
            <AlertCircle />
            <h3>{title}</h3>
            <p>{text}</p>
            <div className={styles.__actions}>
                <button onClick={handleClose} className={styles.__actions__cancel}>{actions.cancel}</button>
                <button onClick={onSubmit} className={styles.__actions__submit}>{actions.submit}</button>
            </div>
        </div>
    </dialog>
}));