import React from 'react'
import style from "./UserNav.module.css"
import Link from 'next/link'
import { Bag as Cart, Heart } from "@components/icons"
import { useUI } from '@components/ui/context'

const UserNav = () => {

    const { openSideBar } = useUI();

    return (
        <nav>
            <ul className={style.list}>
                <li>
                    <a className={style.item}>
                        <Cart onClick={ openSideBar }/>
                    </a>
                </li>
                <li>
                    <Link href={"/wishlist"}>
                        <a className={style.item}>
                            <Heart/>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default UserNav