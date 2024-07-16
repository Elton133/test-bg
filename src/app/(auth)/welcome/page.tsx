import type {Metadata} from "next";
import Link from "next/link";
import GoogleLogo from '@assets/google_logo.png'
import EmailIcon from '@assets/email_icon.png'
import Image from "next/image";

export const metadata: Metadata = {
    title: "BSG - Welcome",
    description: "Login to your BSG account",
    keywords: ["login", "law", "bar exam", "study", "guide", "lawyers", "students", "legal", "resources"],
    robots: "follow, index",
};

export default function LoginPage() {
    return (
        <main className="max-w-[455px] py-[5%] sm:py-[10%] w-full px-4 lg:px-8">
            <div className={'v-stack gap-6'}>
                    <div className={'v-stack'}>
                        <h1 className="text-2xl font-semibold">Welcome to BSG!</h1>
                        <p className={'text-sm font-normal text-[#70787C]'}>Sign in or create an account to get access to resources.</p>
                </div>
                <div className={'v-stack gap-2'}>
                    <Link href={'/login'} className={'h-stack w-full stack-center py-2 border rounded-lg'}>
                        <Image src={GoogleLogo} alt={'google logo'} width={24} height={24} />
                        <p className={'text-sm'}>Continue with Google</p>
                    </Link>
                    <Link href={'/login'} className={'h-stack w-full stack-center py-2 border rounded-lg'}>
                        <Image src={EmailIcon} alt={'google logo'} width={24} height={24} />
                        <p className={'text-sm'}>Continue with Email</p>
                    </Link>
                </div>
                <div className={'h-stack stack-center text-xs'}>
                    <p>Don’t have an account? <Link href={'/register'} className={'text-[#3A7FA8]'}>Sign up</Link></p>
                </div>
            </div>
        </main>
    );
}
