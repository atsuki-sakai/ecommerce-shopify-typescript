
import { FC, ReactNode } from 'react';
import style from "./Layout.module.css"
import "../../../styles/base.css"

type Props = {
    children?: ReactNode | ReactNode[]
}

const Layout: FC<Props> = ({children}: Props) => {
    return (
        <div className={style.root}>
            <main style={{ color: "var(--primary)" }} className={style.fit}>
                { children }
            </main>
        </div>
    )
}

export default Layout