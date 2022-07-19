import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Logo from "../public/logo-transparent.png";

import { GoThreeBars } from "react-icons/go"

const links = [
    {
        name: "Home",
        link: "/",
        id: "home",
        priority: false
    },
    {
        name: "About",
        link: "/about",
        id: "about",
        priority: false
    },
    {
        name: "Agenda",
        link: "/agenda",
        id: "agenda",
        priority: false
    },
    {
        name: "Speakers",
        link: "/speakers",
        id: "speakers",
        priority: false
    },
    {
        name: "Prizes",
        link: "/prizes",
        id: "prizes",
        priority: false
    },
    {
        name: "Sign Up",
        link: "/sign-up",
        id: "call-to-action",
        priority: true
    },
];

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="bg-emerald-1000 py-2 lg:py-4 sticky z-[99999999]">
            <div className="container px-4 mx-auto lg:flex lg:items-center">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <a className="flex flex-row items-center gap-4 font-bold text-xl text-teal">
                            <Image src={Logo} alt="logo" width={64} height={64} />
                            <h2 className="text-2xl text-white">Turtle Hacks</h2>
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

                <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:ml-auto mt-3 lg:mt-0`} data-test-id="navbar">
                    {
                        links.map(({ name, link, priority, id }) =>
                            <Link key={name} href={link}>
                                <a className={`${priority ? "text-emerald-300 hover:bg-emerald-900 hover:text-white text-center border border-solid border-emerald-900 mt-1 lg:mt-0 lg:ml-1" : "text-gray-300 hover:bg-gray-200/25 hover:text-white"} p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors`}>
                                    {name}
                                </a>
                            </Link>
                        )
                    }
                </div>
            </div>
        </header>
    )
}