import { forwardRef, memo } from "react";
import { Outlet } from "react-router-dom";
import { SideMenu } from "../";
import styles from "./layout.module.scss";

export const Layout = memo(forwardRef<HTMLElement>((props, ref) => {
    return <main className={styles.__} ref={ref}>
        <SideMenu />
        <div className={styles.__container}>
            <Outlet />
        </div>
    </main>
}))