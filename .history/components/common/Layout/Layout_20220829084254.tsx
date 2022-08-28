
import { FC, ReactNode } from 'react';
import style from "./Layout.module.css"

type Props = {
    children?: ReactNode | ReactNode[]
}

const Layout: FC<Props> = ({children}: Props) => {
    return (
        <div className={style.root}>
            <main className={style.fit}>
                { children }
            </main>
        </div>
    )
}

export default Layout