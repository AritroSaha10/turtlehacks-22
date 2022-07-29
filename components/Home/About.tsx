import React from "react"
import Image from 'next/image'

import { eventTimeShort } from '@util/config'

import Logo from "@media/logo.png"

export default function About() {
    return (
        <section className="flex p-10 flex-col items-center lg:flex-row lg:p-20 xl:px-40 items-left bg-sky-800 gap-6 z-[30] py-0 lg:pt-8 pb-0 lg:pb-0 xl:pb-0" id="about">
            <div className="flex flex-col items-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0">
                <h1 className="text-white font-bold text-3xl md:text-4xl">Canada&apos;s first <span className='text-green-300'>green-centric</span> high school hackathon</h1>
                <p className="mt-4 w-full md:w-3/4 text-lg text-gray-200">
                    TurtleHacks is a green-centric hackathon happening from {eventTimeShort},
                    where hackers all over the world can gather for a weekend of learning and creating solutions to help the environment
                    through code.
                </p>

                <p className='mt-4 w-full md:w-3/4 text-lg text-gray-200'>
                    During this 36-hour hackathon, you can work in teams of up to four to create anyhing with one goal in mind: helping the
                    environment. After finishing your project, you can pitch your project to a panel of judges to compete for prizes!
                </p>
            </div>

            <div className="flex p-0 m-0 w-1/2 md:w-1/4">
                <div className='flex ring-8 ring-emerald-500 rounded-full'>
                    <Image className="rounded-full" src={Logo} alt="Logo" objectFit="cover" objectPosition="center" width={540} height={540} quality={100} placeholder="blur" />
                </div>
            </div>
        </section>
    )
}