
import { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode | ReactNode[]
}


const Layout = ({children}: Props) => {
    return (
        <div className="layout">
            { children }
        </div>
    )
}

export default Layout