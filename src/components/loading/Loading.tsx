import { forwardRef } from "react";
import LoadingProps from "./LoadingProps";
import styles from "./loading.module.scss";

export const Loading = forwardRef<HTMLDialogElement, LoadingProps>(({ isOpen }, ref) => {
    return <dialog {...({ open: isOpen })} className={styles.__} ref={ref}>
        <div className={styles.circle}>
            <div className={styles.wave}></div>
        </div>
    </dialog>
});

export default Loading