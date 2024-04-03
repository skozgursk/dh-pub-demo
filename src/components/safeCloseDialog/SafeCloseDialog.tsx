import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import SafeCloseDialogProps from "./SafeCloseDialogProps";
import styles from "./safeCloseDialog.module.scss"

export const SafeCloseDialog = forwardRef<HTMLDialogElement, SafeCloseDialogProps>((props, ref) => {

    return <dialog className={styles.__} ref={ref}></dialog>
});

export default SafeCloseDialog