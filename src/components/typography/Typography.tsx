import React, { ReactElement, forwardRef, memo, useMemo } from "react";
import { TypographyProps } from "./TypographyProps";
import styles from "./typography.module.scss"

export const Typography = memo(forwardRef<HTMLElement, TypographyProps>(({ children, ...props }, ref) => {

    const classText = useMemo(() => {
        return Object.keys(props).map(item => {
            return styles[`__${item}`]
        }).join(' ')
    }, [props])

    return <>
        {typeof children !== 'string' && !Array.isArray(children) ?
            React.Children.map(children, (child) => {
                return React.cloneElement(child as ReactElement<HTMLElement>, {
                    className: classText,
                });
            }) :
            <span className={classText}>{children}</span>
        }
    </>
}));

export default Typography