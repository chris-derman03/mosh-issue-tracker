"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoImage from "@/public/images/logo.webp";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
    ];

    return (
        <nav className="flex space-x-6 border-b px-5 h-14 items-center">
            <Link href="/">
                <Image src={logoImage} alt="Issue Tracker" width={35} />
            </Link>

            <ul className="flex space-x-6">
                {links.map((link, index) => (
                    <li key={"navBarLink_" + index}>
                        <Link
                            href={link.href}
                            className={classNames({
                                "text-zinc-900": link.href === currentPath,
                                "text-zinc-500": link.href !== currentPath,
                                "hover:text-zinc-800 transition-colors": true,
                            })}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
