import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoImage from "@/public/images/logo.webp";
import { ThemeChanger } from "../ThemeChanger";
import NavBarRoutes from "./NavBarRoutes";

const NavBar = () => {
    const routes = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
    ];

    return (
        <nav className="flex space-x-6 border-b px-5 h-14 items-center mb-5">
            <Link href="/">
                <Image src={logoImage} alt="Issue Tracker" width={35} />
            </Link>

            <NavBarRoutes routes={routes} />

            <div className="flex ml-auto">
                <ThemeChanger />
            </div>
        </nav>
    );
};

export default NavBar;
