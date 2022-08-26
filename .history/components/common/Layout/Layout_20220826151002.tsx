
import { ReactNode, FC } from "react"

type PropsType = {
    children: ReactNode
}

const Layout: FC<PropsType> = ({ children }: PropsType) => {
    return (
        <div className="layout">
            { children }
        </div>
    )
}

export default Layout