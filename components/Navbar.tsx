import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { devpostLink, name, registrationLink } from "@util/config";

import Logo from "@media/logo-transparent.png";
import { GoThreeBars } from "react-icons/go"
import TopBanner from "./TopBanner";

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const links = [
    {
        name: "Home",
        link: "/#home",
        id: "home",
        priority: false
    },
    {
        name: "About",
        link: "/#about",
        id: "about",
        priority: false
    },
    {
        name: "Event",
        link: "/#event-details",
        id: "event-details",
        priority: false
    },
    {
        name: "FAQ",
        link: "/#FAQ",
        id: "faq",
        priority: false
    },
    {
        name: "Sponsors",
        link: "/#sponsors",
        id: "sponsors",
        priority: false
    },
    {
        name: "Team",
        link: "/#team",
        id: "team",
        priority: false
    },
    {
        name: "View Devpost",
        link: devpostLink,
        id: "call-to-action",
        priority: true
    },
];

const scrollPosToPercentage = (scrollPos: number) => {
    const currScroll = clamp(Math.abs(scrollPos), 0, 80) * 100/80; // Goes opaque after 80 pixels scrolled (generally 1 scroll wheel click)
    return currScroll / 100; // Convert to percentage
}

export default function Header({ home }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [opacity, setOpacity] = useState(home ? 0 : 1); // Fully transparent on home screen, otherwise normal

    useScrollPosition(({ currPos }) => {
        if (home && !showDropdown) {
            setOpacity(scrollPosToPercentage(currPos.y));
        }
    })

    return (
        <div className="fixed z-50 w-screen">
            <TopBanner showBanner={true} />
            <nav className="flex flex-col items-center py-2 lg:py-4 w-full transition-colors duration-75" style={{ background: `rgba(33, 59, 34, ${showDropdown ? 1 : opacity})`}}>
                <div className="container px-4 lg:flex lg:items-center lg:justify-around w-full">
                    <div className="flex justify-around items-center">
                        <Link href="/#home">
                            <a className="flex flex-row items-center gap-4 font-bold text-xl text-teal">
                                <Image src={Logo} alt="logo" width={64} height={64} quality={100} placeholder="blur" />
                                <h2 className="text-2xl text-white">{name}</h2>
                            </a>
                        </Link>

                        <button
                            className="border border-solid border-gray-200 px-3 py-1 rounded text-gray-200 opacity-50 hover:opacity-75 lg:hidden cursor-pointer"
                            aria-label="Menu"
                            data-test-id="navbar-menu"
                            onClick={
                                () => {
                                    setShowDropdown(!showDropdown);
                                }}
                        >
                            <GoThreeBars />
                        </button>
                    </div>

                    <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row mt-3 lg:mt-0`} data-test-id="navbar">
                        {
                            links.map(({ name, link, priority, id }) =>
                                <Link key={name} href={link}>
                                    <a className={`${priority ? "text-emerald-300 hover:bg-emerald-900 hover:text-white text-center border border-solid border-emerald-900 mt-1 lg:mt-0 lg:ml-1" : "text-gray-300 hover:bg-gray-200/25 hover:text-white"} p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors`} onClick={() => { setShowDropdown(false) }} target={priority ? "_blank" : "_self"}>
                                        {name}
                                    </a>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}