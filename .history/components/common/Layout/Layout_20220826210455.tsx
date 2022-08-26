
import { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode | ReactNode[]
}


const Layout = ({children}: { children?: ReactNode }) => {
    return (
        <div className="layout">
            { children }
        </div>
    )
}

export default Layout