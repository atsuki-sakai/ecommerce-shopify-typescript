
import { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode | ReactNode[]
}

const Layout: FC<Props> = ({children}: Props) => {
    return (
        <>
            <div className="root">
                { children }
            </div>
        </>
    )
}

export default Layout