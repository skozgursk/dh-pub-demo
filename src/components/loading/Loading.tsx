import { forwardRef } from "react";
import LoadingProps from "./LoadingProps";
import styles from "./loading.module.scss";

export const Loading = forwardRef<HTMLDivElement, LoadingProps>((props, ref) => {

    return <div className={styles.__} ref={ref}></div>
});

export default Loading