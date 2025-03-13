"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoImage from "@/public/images/logo.webp";
import { ThemeChanger } from "./components/ThemeChanger";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
    const currentPath = usePathname();
    const currentLevel1Path = "/" + currentPath.split("/")[1];

    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
    ];

    return (
        <nav className="flex space-x-6 border-b px-5 h-14 items-center mb-5">
            <Link href="/">
                <Image src={logoImage} alt="Issue Tracker" width={35} />
            </Link>
            {/* 
            <NavBarRoutes /> */}

            <ul className="flex space-x-6">
                {links.map((link, index) => (
                    <li key={"navBarLink_" + index}>
                        <Link
                            href={link.href}
                            className={classNames({
                                "text-zinc-900":
                                    link.href === currentLevel1Path,
                                "text-zinc-500":
                                    link.href !== currentLevel1Path,
                                "hover:text-zinc-800 transition-colors": true,
                            })}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* <div className="flex ml-auto">
                <ThemeChanger />
            </div> */}
        </nav>
    );
};

export default NavBar;
