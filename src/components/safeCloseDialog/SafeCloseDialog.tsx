import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import SafeCloseDialogProps from "./SafeCloseDialogProps";
import styles from "./safeCloseDialog.module.scss"
import IconButton from "../iconButton/IconButton";
import { AlertCircle, Close } from "../../assets";

export const SafeCloseDialog = forwardRef<HTMLDialogElement, SafeCloseDialogProps>(({ title, text, actions, onSubmit }, ref) => {
    const handleClose = () => {
        localRef.current?.close()
    }

    const localRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => localRef.current!, [localRef]);

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
});

export default SafeCloseDialog