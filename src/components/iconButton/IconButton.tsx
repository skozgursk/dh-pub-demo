import { forwardRef } from "react";
import IconButtonProps from "./IconButtonProps";
import styles from "./iconButton.module.scss";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {

    return <button 
    className={`${styles.__} ${props.className}`}
    onClick={props?.onClick}
    ref={ref} 
    aria-label={props.ariaLabel}>
        {<props.icon />}
    </button>
});