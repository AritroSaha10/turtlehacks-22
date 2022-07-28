import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion"

import { eventTimeShort } from '@util/config'
import transition from "@util/anim/transition";

import Banner from "@media/banner.png"
import classArrayToString from "@util/styles/classNames";
import ScrollingText from "@components/ScrollingText";

const topLineVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    }
  }
};

const characterVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ...transition }, }
};

const title = "Turtle Hacks".toUpperCase().split(' ');
const subtitle = "A subtitle".split(' ');

const Home: FC = () => (
  <>
    <section className="flex flex-col h-screen w-full fixed" id="home">
      {/* Background image using Next.js Image, taken from here: https://github.com/vercel/next.js/discussions/18357#discussioncomment-132523 */}
      <Image
        src={Banner}
        objectFit="cover"
        objectPosition="center"
        alt="Banner"
        layout="fill"
        quality={100}
        placeholder="blur"
        className="duration-300 transition-all"
      />

      <div
        className={classArrayToString([
          "absolute",
          "h-screen",
          "w-full",
          "p-4 xs:p-8 sm:p-16",
          "flex flex-col",
          "justify-center items-center",
          "bg-black/60",
        ])}
      >
        <div className="text-center">
          <div className="mb-4">
            <ScrollingText text={[
              "Compete at",
              "Strive for success at",
              "Create at",
              "Enjoy free food at",
              "Design at",
              "Dream big at",
              "Innovate at",
              "Leave a legacy at",
              "Connect at",
              "Find opportunities at",
              "Network at",
              "Compete at",
              "Win prizes at",
            ]}/>

            

            {/*
            <m.div
              variants={bottomLineVariants}
              initial="initial"
              animate="animate"
              className={classArrayToString([
                "flex flex-col flex-wrap",
                "gap-2",
                "text-6xl sm:text-7xl lg:text-9xl",
                "font-extrabold"
              ])}
            >
              {title.map(char =>
                <m.span
                  className={classArrayToString([
                    "inline-block relative",
                    "pb-5",
                    "bg-clip-text text-transparent",
                    "bg-gradient-to-r",
                    "from-emerald-500 to-cyan-500"
                  ])}
                  variants={characterVariants}
                  key={char}
                >
                  {char}
                </m.span>
              )}
            </m.div>
                */}

            <div
              className={classArrayToString([
                "flex flex-col flex-wrap",
                "gap-2",
                "text-6xl sm:text-7xl lg:text-9xl",
                "font-extrabold"
              ])}
            >
              {title.map(char =>
                <span
                  className={classArrayToString([
                    "inline-block relative",
                    "pb-5",
                    "bg-clip-text text-transparent",
                    "bg-gradient-to-r",
                    "from-emerald-500 to-cyan-500"
                  ])}
                  key={char}
                >
                  {char}
                </span>
              )}
            </div>
          </div>
        </div>

        <div
          className={classArrayToString([
            "md:w-3/4 lg:w-1/2",
            "mb-12",
            "flex flex-col",
            "gap-2",
            "text-white"
          ])}
        >
          <p className="text-2xl text-center font-light">
            Happening during {eventTimeShort}!
          </p>
        </div>

        <div>
          <Link href="/sign-up">
            <a
              className={classArrayToString([
                "py-4 px-6",
                "mt-4",
                "bg-emerald-600 hover:bg-emerald-700",
                "rounded-lg",
                "text-lg lg:text-2xl",
                "text-white font-semibold",
                "duration-150"
              ])}
            >
              Sponsor Us Today! →
            </a>
          </Link>
        </div>
      </div>
    </section>

    <div className="h-screen z-[-10]" />
  </>
)

export default Home;