import { forwardRef } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../sideMenu/SideMenu";
import styles from "./layout.module.scss";

export const Layout = forwardRef<HTMLElement>((props, ref) => {
    return <main className={styles.__} ref={ref}>
        <SideMenu/>
        <div className={styles.__container}>
            <Outlet />
        </div>
    </main>
});

export default Layout