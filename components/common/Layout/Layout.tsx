
import { FC, ReactNode } from 'react';
import style from "./Layout.module.css"
import { Footer, NavBar } from "@components/common"
import { Sidebar } from '@components/ui';
import { CartSideBar } from '@components/cart';
import { useUI } from "@components/ui/context"

type Props = {
    children?: ReactNode | ReactNode[]
}

const Layout: FC<Props> = ({children}: Props) => {

    const {isSideBarOpen, closeSideBar } = useUI()
    return (
        <div className={style.root}>
            <NavBar/>
            <Sidebar 
                isOpen={ isSideBarOpen }
                onClose={ closeSideBar }
            >
                <CartSideBar/>
            </Sidebar>
            <main className={style.fit}>
                { children }
            </main>
            <Footer/>
        </div>
    )
}

export default Layout