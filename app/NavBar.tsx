import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoImage from "@/public/images/logo.webp";

const NavBar = () => {
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
                            className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
