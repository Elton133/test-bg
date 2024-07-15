import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/logo.jpg"
import React from "react";

export default function NavBar(): React.ReactElement {
    return (
        <nav className={'flex items-center bg-white py-5 px-8 lg:px-16 xl:px-20 w-full fixed top-0'}>
            <div>
                <Link href={'/'}>
                    <Image loading={'lazy'} placeholder={'blur'} src={Logo} alt={'BSG logo'} width={36} height={36} />
                </Link>
            </div>
        </nav>
    )
}