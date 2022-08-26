
import { FC, ReactNode } from "react" 

type PropsType = {
    children: ReactNode
}

const Layout = ({children}: PropsType) => {
    return (
        <div className="layout">
            { children }
        </div>
    )
}

export default Layout