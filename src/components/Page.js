import React from 'react'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Page = ({ children }) => {
    return (
        <div className="bg-page-background-mobile sm:bg-page-background-desktop min-h-screen bg-fixed bg-cover">
            <Head>
                <title>PerTest Assessment</title>
            </Head>
            {/* content wrapper */}
            <main className="px-6 xl:px-32">

                {/* logo */}
                <div className="w-full text-center pb-8">
                    <div className="border-l-1 border-black h-32 sm:h-64 inline-block">
                        <div className="absolute transform -translate-x-1/2 translate-y-1/2 w-16 sm:w-32">
                            <Image
                                src="/img/logo.svg"
                                height={128}
                                width={128}
                                alt="Logo"
                                layout="responsive"
                                sizes="4 rem, (min-width: 640px) 8rem"
                            />
                        </div>
                    </div>
                </div>

                {children}

            </main>
        </div>
    )
}

export { Page }
