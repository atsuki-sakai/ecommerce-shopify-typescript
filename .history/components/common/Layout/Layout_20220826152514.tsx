
import { ReactNode, FC } from "react"


const Layout: FC<any> = ({ children }) => {
    return (
        <div className="layout">
            { children }
        </div>
    )
}

export default Layout