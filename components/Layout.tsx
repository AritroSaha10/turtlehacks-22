import { ReactNode } from "react"
import Head from "next/head"
import dynamic from "next/dynamic"

import { m } from "framer-motion"

import Navbar from "@components/Navbar"
const Footer = dynamic(() => import("@components/Footer"), { suspense: true })

import { name as siteName, description, image, twitterCreator } from "@util/config"

const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

const contentVariants = {
    initial: { y: 200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -200, opacity: 0 },
    transition: { duration: 0.4, ...transition }
}

interface Props {
    name: string,
    children?: ReactNode,
    noAnim?: boolean,
    home?: boolean
};

export default function Layout({ name, children, noAnim, home }: Props) {
    const title = `${name} | ${siteName}`;

    return (
        <div className="flex flex-col min-h-screen bg-indigo-200 overflow-hidden" key={name}>
            <Head>
                <title>{title}</title>
                
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
 
                <meta name="description" content={description} />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={image.src} />
                <meta property="og:image:type" content={image.type} />
                <meta property="og:image:width" content={image.width} />
                <meta property="og:image:height" content={image.height} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={twitterCreator} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image:src" content={image.src} />
            </Head>

            <Navbar home={home} />
            
            <m.main
                initial={noAnim ? null : contentVariants.initial}
                animate={noAnim ? null : contentVariants.animate}
                exit={noAnim ? null : contentVariants.exit}
                transition={noAnim ? null : contentVariants.transition}
                className="flex-grow flex flex-col"
            >
                {children}
            </m.main>

            <Footer />
        </div>
    )
}
