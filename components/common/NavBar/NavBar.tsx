import React, { FC } from 'react'
import { Container } from '@components/ui'
import Link from 'next/link'
import style from "./NavBar.module.css"
import { UserNav } from "@components/common"

const NavBar: FC = () => {
    return (
        <Container>
            <div className={style.root}>
                <div className='flex flex-1 items-center'>
                    <Link href={"/"} passHref>
                        <a className='font-bold decoration-white text-black'>
                            Next Store
                        </a>
                    </Link>
                    <nav className='ml-6 space-x-6'>
                        <Link href={"/"} passHref>
                            <a className={style.link}>All</a>
                        </Link>
                        <Link href={"/"} passHref>
                            <a className={style.link}>Clothes</a>
                        </Link>
                        <Link href={"/"} passHref>
                            <a className={style.link}>Accesories</a>
                        </Link>
                        <Link href={"/"} passHref>
                            <a className={style.link}>Shoes</a>
                        </Link>
                        <Link href={"/"} passHref>
                            <a className={style.link}>Pants</a>
                        </Link>
                    </nav>
                    <div className='flex flex-1 justify-end space-x-8'>
                        <UserNav/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default NavBar