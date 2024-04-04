import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton } from "../";
import IconButtonProps from "../iconButton/IconButtonProps";
import SideMenuButtonProps from "./SideMenuButtonProps";
import styles from "./sideMenuButton.module.scss";
import { useCallback, useMemo } from 'react';

const sideMenuButtonHOC = (WrappedComponent: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>) => {
    return (props: SideMenuButtonProps) => {
        const location = useLocation();
        const navigate = useNavigate()

        const handleClick = useCallback((href?: string) => {
            if (href) {
                navigate(href)
            } else if (props.onClick) {
                props.onClick()
            }
        }, [navigate, props])

        const checkActive = useMemo(() => {
            if (props.href) {
                return location.pathname.split('/')[1] === props.href.split(':')[0].split('/')[1]
            }
            return false
        }, [props, location])

        return <>
            <WrappedComponent
                className={`${styles.__} ${(checkActive) ? styles.__active : ''} `}
                onClick={() => { handleClick(props.href) }}
                {...props}
            />
        </>
    };
};

export const SideMenuButton = sideMenuButtonHOC(IconButton)