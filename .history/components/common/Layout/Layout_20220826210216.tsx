
import { FC, ReactNode } from 'react';


const Layout = ({ children }:{ children: ReactNode }) => {
    return (
        <div className="layout">
            { children }
        </div>
    )
}

export default Layout