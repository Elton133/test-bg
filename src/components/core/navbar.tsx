import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/logo.jpg"
import React from "react";

export default function NavBar(): React.ReactElement {
    return (
        <header className={'sm:h-[78px] h-[56px] z-10'}>
            <nav className={'flex items-center bg-white border-[0.5px] border-[#D3D5D6] py-3 sm:py-5 px-4 lg:px-16 xl:px-20 w-full fixed top-0 z-20'}>
                <div>
                    <Link href={'/'}>
                        <Image loading={'lazy'} className={'w-7 sm:w-9'} placeholder={'blur'} src={Logo} alt={'BSG logo'} width={36} height={36} />
                    </Link>
                </div>
            </nav>
        </header>
    )
}