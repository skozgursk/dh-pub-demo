import { ComponentType } from "react";

export default interface IconButtonProps extends Partial<HTMLButtonElement> {
    icon: ComponentType,
    ariaLabel: string,
    onClick: (e: any) => void
}