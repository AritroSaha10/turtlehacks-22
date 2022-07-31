import React from "react"
import Image from 'next/image'

import client from "@lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import { SanityReference } from "@sanity/image-url/lib/types/types";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

import { m } from "framer-motion"
import transition from "@util/anim/transition";

const teamVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const memberVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { ...transition, duration: 0.7 }, }
};

export interface TeamMemberData {
    position: string,
    name: string,
    image: SanityReference,
    links?: {
        url: string,
        website: "GitHub" | "Instagram" | "LinkedIn" | "Website"
    }[]
};

const iconMapping = {
    "GitHub": <FaGithub className="text-xl text-white hover:text-gray-300 duration-150" />,
    "Instagram": <FaInstagram className="text-xl text-white hover:text-gray-300 duration-150" />,
    "LinkedIn": <FaLinkedin className="text-xl text-white hover:text-gray-300 duration-150" />,
    "Website": <MdWeb className="text-xl text-white hover:text-gray-300 duration-150" />
}

const TeamMember = ({ position, name, image, links }: TeamMemberData) => {
    // Prepare next.js image from sanity CMS
    const imageProps = useNextSanityImage(
        client,
        image
    );

    links = links ?? [];

    return (
        <m.div
            className="flex flex-col items-center text-center relative"
            variants={memberVariants}
        >
            <div className="rounded-full">
                <Image
                    {...imageProps}
                    height={200}
                    width={200}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Photo"
                    placeholder="blur"
                    className="rounded-full"
                />
            </div>
            <h1 className="text-3xl font-bold text-white mt-4">{name}</h1>
            <h1 className="text-xl font-semibold text-emerald-300 my-1">{position}</h1>

            <div className="flex flex-wrap gap-4">
                {links.map(({ url, website }) => (
                    <a href={url} target="_blank" rel="noreferrer" key={website}>
                        {iconMapping[website]}
                    </a>
                ))}
            </div>
        </m.div>
    )
}

export default function Team({ team }: { team: TeamMemberData[] }) {
    return (
        <section className="flex p-10 flex-col items-center lg:p-20 xl:px-40 bg-cyan-800 z-[30]" id="team">
            <div className="flex flex-col text-center mb-8">
                <span className="text-lg text-emerald-200 font-semibold">The people behind it all</span>
                <h1 className="text-4xl text-white font-bold">Team</h1>
            </div>

            <m.div
                className="flex flex-wrap gap-8 lg:gap-16 justify-around w-full"
                variants={teamVariants}
                initial="initial"
                animate="animate"
            >
                {team.map((data, idx) => (
                    <TeamMember {...data} key={idx} />
                ))}
            </m.div>
        </section>
    )
}