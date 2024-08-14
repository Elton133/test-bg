import gif from "@assets/juicy-girl-working-at-home.gif";
import Image from "next/image";
import books from "@assets/books.png";

export default function Home() {
    return (
        <main className="bg-white dark:bg-gray-950 dark:text-white ">
        <section className="relative py-24 px-4 lg:px-16 border-b border-b-border ">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex flex-col gap-4 font-medium">
                    <h1 className="text-3xl lg:text-7xl font-bold leading-relaxed">Prepare For Your <span className="text-gradient bg-gradient-to-r from-[#E4C162] via-[#FFEDBB] to-[#E4C162]">Bar Exam </span>With Us</h1>
                    <p className="text-sm lg:text-base max-w-2xl leading-6">We provide law students with a centralized platform, streamlining access to key resources for efficient bar exam preparation.</p>
                </div>
                <Image src={gif} width={500} height={400} alt="girl typing" />
            </div>
            <div className="absolute justify-center flex w-full mx-auto z-10 overflow-hidden">

            <div className="flex flex-col items-center justify-center w-full max-w-3xl h-80 bg-[#FFFBF0] bg-[url('../../public/assets/blobb-bg.png')] bg-center bg-cover bg-no-repeat rounded-xl py-11 px-11 text-center shadow-lg">
                <p className="font-bold text-3xl mb-4">About The Team</p>
                <p className="leading-6 text-sm lg:text-base max-w-lg">
                    The Best Study Guide is compiled and edited by a group of former students of the Ghana School of Law Post-Call Law Course named the Best Study Darlings.
                    We created this comprehensive platform to serve as a one-stop solution for the Ghana Bar Exam preparation.
                </p>
            </div>
            </div>
        </section>
        <section className="border-b border-b-border h-96 w-full">
</section>
        <section className="bg-background relative py-24 px-4 lg:px-16 border-b border-b-border">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center">
                <Image src={books} width={300} height={400} alt="girl typing" />
                <div className="flex flex-col gap-4 font-medium">
                    <h1 className="text-2xl lg:text-4xl font-bold">Explore the study guides put together
                    by <span className="text-gradient bg-gradient-to-r from-[#063231] via-[#4E8E9B] to-[#063231]">past law students </span></h1>
                    <p className="text-sm lg:text-base leading-6">Master key concepts and exam strategies by exploring insights within the Study Guides</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 border-y gap-y-6 border-black text-medium py-4">
                        <div className="flex flex-col">
                            <p className="font-semibold text-2xl lg:text-3xl">7</p>
                            <p>Comprehensive <br /> Courses</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-2xl lg:text-3xl">7</p>
                            <p>Past Question <br />
                            Indices (2018-2023)</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-2xl lg:text-3xl">50+</p>
                            <p>Essential<br />
                            Topics</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-2xl lg:text-3xl">100+</p>
                            <p>Interactive<br />
                            MCQs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    );
}
