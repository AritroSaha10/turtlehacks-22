import React from "react"
import Image from 'next/image'

import client from "../../lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import { SanityReference } from "@sanity/image-url/lib/types/types";

export interface TeamMemberData {
    position: string,
    name: string,
    image: SanityReference,
    website?: string
};

const TeamMember = ({ position, name, image, website }: TeamMemberData) => {
    // Prepare next.js image from sanity CMS
    const imageProps = useNextSanityImage(
        client,
        image
    );

    if (website) {
        return (
            <a href={website} target="blank" rel="noreferrer">
                <div className="text-center">
                    <Image
                        {...imageProps}
                        height={200}
                        width={200}
                        quality={100}
                        objectFit="cover"
                        objectPosition="center"
                        alt="Photo"
                        placeholder="blur"
                        className="rounded-full"
                    />
                    <h1 className="text-3xl font-bold text-white mt-4">{name}</h1>
                    <h1 className="text-xl font-semibold text-emerald-300 my-1">{position}</h1>
                </div>
            </a>
        )
    } else {
        return (
            <div className="text-center">
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
                <h1 className="text-3xl font-bold text-white mt-4">{name}</h1>
                <h1 className="text-xl font-semibold text-emerald-300 my-1">{position}</h1>
            </div>
        )
    }
}

export default function Team({ team }: { team: TeamMemberData[] }) {
    return (
        <section className="flex p-10 flex-col items-center lg:p-20 xl:px-40 bg-cyan-800 z-[30]">
            <div className="flex flex-col text-center mb-8">
                <h3 className="text-lg text-emerald-200 font-semibold">The people behind it all</h3>
                <h1 className="text-4xl text-white font-bold">Team</h1>
            </div>

            <div className="flex flex-wrap gap-8 lg:gap-16 justify-around w-full">
                {team.map(data => (
                    <TeamMember {...data} key={data.name} />
                ))}
            </div>
        </section>
    )
}