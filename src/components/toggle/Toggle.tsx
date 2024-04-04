import { forwardRef, useCallback, useEffect, useState } from "react";
import ToggleProps from "./ToggleProps";
import styles from "./toggle.module.scss";

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(({ label, value, onChange }, ref) => {
    const [defaultValue, setDefaultValue] = useState(value)
    const toggleDefault = useCallback(() => setDefaultValue(!defaultValue), [defaultValue])

    useEffect(() => {
        onChange(defaultValue)
    }, [defaultValue])

    return <div className={styles.__}>
        <label>
            {label}
        </label>
        <div className={`${styles.__switch} ${defaultValue ? styles['__switch--checked'] : ''}`}>
            <span onClick={toggleDefault} className={`${styles.__slider} ${defaultValue ? styles['__slider--checked'] : ''}`}></span>
        </div>
    </div>
});

export default Toggle