import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton } from "../";
import IconButtonProps from "../iconButton/IconButtonProps";
import SideMenuButtonProps from "./SideMenuButtonProps";
import styles from "./sideMenuButton.module.scss";

const sideMenuButtonHOC = (WrappedComponent: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>) => {
    return (props: SideMenuButtonProps) => {
        const location = useLocation();
        const navigate = useNavigate()

        const handleClick = (href?: string) => {
            if (href) {
                navigate(href)
            } else if (props.onClick) {
                props.onClick()
            }
        }

        const checkActive = (href?: string) => {
            if (href) {
                return location.pathname.split('/')[0] === href.split(':')[0].split('/')[0]
            }
            return false
        }
        return <>
            <WrappedComponent
                className={`${styles.__} ${(checkActive(props.href)) ? styles.__active : ''} `}
                onClick={() => { handleClick(props.href) }}
                {...props}
            />
        </>
    };
};

export const SideMenuButton = sideMenuButtonHOC(IconButton)