import IconButtonProps from "../iconButton/IconButtonProps";

export default interface SideMenuButtonProps extends Omit<IconButtonProps, 'onClick'> {
    href?: string
    onClick?: () => void
}