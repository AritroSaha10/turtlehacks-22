import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from "framer-motion"

import Layout from "../components/Layout"

import Banner from "../public/banner.svg"
import { name, eventTimeShort } from '../util/config'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const topLineVariants = {
  initial: {
  },
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const bottomLineVariants = {
  initial: {
  },
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    }
  }
};

const characterVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ...transition }, }
};

const topLine = "Get ready for...".split(' ');
const bottomLine = name.toUpperCase().split(' ');

export default function Home() {
  return (
    <Layout name="Home" noAnim>
      <div className="flex flex-col h-screen w-full relative">
        {/* Background image using Next.js Image, taken from here: https://github.com/vercel/next.js/discussions/18357#discussioncomment-132523 */}
        <Image
          src={Banner}
          objectFit="cover"
          objectPosition="center"
          alt="Banner"
          layout="fill"
          quality={100}
          priority={true}
        />

        <div className="absolute p-4 xs:p-8 sm:p-16 z-1 flex flex-col justify-center items-center h-screen bg-black/60 w-full">
          <div className="text-center">
            <div className="mb-4">
              <motion.div variants={topLineVariants} initial="initial" animate="animate" className="font-medium text-white flex flex-wrap gap-2 text-2xl lg:text-4xl justify-center">
                {topLine.map(char => <motion.span className="inline-block relative" variants={characterVariants} key={char}>{char}</motion.span>)}
              </motion.div>

              <motion.div variants={bottomLineVariants} initial="initial" animate="animate" className="font-bold flex flex-col flex-wrap gap-2 text-6xl sm:text-7xl lg:text-9xl">
                {bottomLine.map(char => <motion.span className="inline-block relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-600 pb-5" variants={characterVariants} key={char}>{char}</motion.span>)}
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-white mb-12 md:w-3/4 lg:w-1/2">
            <p className="text-2xl font-light text-center">
              Join us virtually from {eventTimeShort}!
            </p>
          </div>

          <div>
            <Link href="/sign-up">
              <a className="py-4 px-6 bg-emerald-600 rounded-lg font-semibold text-white hover:bg-emerald-700 duration-150 text-lg lg:text-2xl mt-4">
                Sign Up Today! →
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
