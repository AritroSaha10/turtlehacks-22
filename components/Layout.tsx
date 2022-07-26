import Head from "next/head"

import Navbar from "./Navbar"
import Footer from "./Footer"

import { motion } from "framer-motion"

import { name as siteName, description, image, twitterCreator } from "../util/config"

const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

const contentVariants = {
    initial: { y: 200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -200, opacity: 0 },
    transition: { duration: 0.4, ...transition }
}

export default function Layout({ name, children, noAnim, home }) {
    const title = `${name} | ${siteName}`;

    return (
        <div className="flex flex-col min-h-screen bg-indigo-200 overflow-hidden" key={name}>
            <Head>
                <title>{title}</title>
                
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
            
            <motion.main
                initial={noAnim ? null : contentVariants.initial}
                animate={noAnim ? null : contentVariants.animate}
                exit={noAnim ? null : contentVariants.exit}
                transition={noAnim ? null : contentVariants.transition}
                className="flex-grow flex flex-col"
            >
                {children}
            </motion.main>

            <Footer />
        </div>
    )
}