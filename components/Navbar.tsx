import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { name } from "@util/config";

import Logo from "@media/logo-transparent.png";
import { GoThreeBars } from "react-icons/go"

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
        name: "FAQ",
        link: "/#FAQ",
        id: "faq",
        priority: false
    },
    {
        name: "Team",
        link: "/#team",
        id: "team",
        priority: false
    },
    /*
    {
        name: "Sign Up",
        link: "/sign-up",
        id: "call-to-action",
        priority: true
    },
    */
];

const bgSteps = [
    "bg-emerald-1000/[0]",
    "bg-emerald-1000/[0.05]",
    "bg-emerald-1000/[0.1]",
    "bg-emerald-1000/[0.15]",
    "bg-emerald-1000/[0.2]",
    "bg-emerald-1000/[0.25]",
    "bg-emerald-1000/[0.3]",
    "bg-emerald-1000/[0.35]",
    "bg-emerald-1000/[0.4]",
    "bg-emerald-1000/[0.45]",
    "bg-emerald-1000/[0.5]",
    "bg-emerald-1000/[0.55]",
    "bg-emerald-1000/[0.6]",
    "bg-emerald-1000/[0.65]",
    "bg-emerald-1000/[0.7]",
    "bg-emerald-1000/[0.75]",
    "bg-emerald-1000/[0.8]",
    "bg-emerald-1000/[0.85]",
    "bg-emerald-1000/[0.90]",
    "bg-emerald-1000/[0.95]",
    "bg-emerald-1000/[1.00]",
]

const scrollPosToStep = (scrollPos: number) => {
    const currScroll = clamp(Math.abs(scrollPos), 0, 100);
    const scrollFactor = Math.floor(currScroll / 5);
    return bgSteps[scrollFactor]
}

export default function Header({ home }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [opacity, setOpacity] = useState(bgSteps[0]);

    useEffect(() => {
        setOpacity(scrollPosToStep(window !== undefined ? window.scrollY : 0));
    }, []);

    useScrollPosition(({ currPos }) => {
        setOpacity(scrollPosToStep(currPos.y));
    })

    return (
        <nav className={`flex flex-col items-center ${(home && !showDropdown) ? opacity : "bg-emerald-1000"} py-2 lg:py-4 fixed w-full z-[99999999] transition-colors duration-75`}>
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
                                <a className={`${priority ? "text-emerald-300 hover:bg-emerald-900 hover:text-white text-center border border-solid border-emerald-900 mt-1 lg:mt-0 lg:ml-1" : "text-gray-300 hover:bg-gray-200/25 hover:text-white"} p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors`} onClick={() => {setShowDropdown(false)}}>
                                    {name}
                                </a>
                            </Link>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}