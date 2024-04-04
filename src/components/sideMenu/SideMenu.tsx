import { forwardRef, memo } from "react";
import { SideMenuButton } from "..";
import { GorusOneri, Logo } from "../../assets";
import { MenuItem, MenuPages } from "../../utils";

import styles from "./sideMenu.module.scss";

export const SideMenu = memo(forwardRef<HTMLDivElement>((_, ref) => {

    const renderMenu = (pages: Array<MenuItem>, currentPath: string) => {
        return <>
            {pages.map(page => {
                if (!page.children && page.icon) {
                    return <SideMenuButton key={`page-${page.id}`} href={`${currentPath}${page.path}`} icon={page.icon} ariaLabel={page.title} />
                } else if (page.children) {
                    return <div key={`group-${page.id}`} className={styles.__group}>
                        {renderMenu(page.children, page.path ?? '')}
                    </div>
                }
                return <></>
            })}
        </>
    }

    return <div className={styles.__} ref={ref}>
        <Logo />
        {renderMenu(MenuPages, '')}
        <SideMenuButton ariaLabel="Görüş" icon={GorusOneri} />
    </div>
}))