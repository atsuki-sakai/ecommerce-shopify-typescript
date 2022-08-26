
import { FC, ReactNode } from 'react';
import style from "./Layout.module.css"

type Props = {
    children?: ReactNode | ReactNode[]
}

const Layout: FC<Props> = ({children}: Props) => {
    return (
        <>
            <main className={style.root}>
                { children }
            </main>
        </>
    )
}

export default Layout