
import { ReactNode, FC } from "react"

type PropsType = {
    children: ReactNode | ReactNode[]
}

const Layout: FC<any> = ({ children }: PropsType) => {
    return (
        <div className="layout">
            { children }
        </div>
    )
}

export default Layout