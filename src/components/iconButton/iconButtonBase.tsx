import { ComponentType, FC, ReactNode } from "react"

export const IconButtonBase = (ChildComponent: ComponentType<{ children: ReactNode }>) => {

    return ({ children, ...props }: { children: ReactNode }) => {
        return <ChildComponent {...(props)}>
            {children}
        </ChildComponent>

    }
}