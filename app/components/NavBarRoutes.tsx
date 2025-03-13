"use client";
import React from "react";
// import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";

const NavBarRoutes = () => {
    // const { theme, setTheme } = useTheme();
    const theme = "dark";
    const currentPath = usePathname();
    const currentLevel1Path = "/" + currentPath.split("/")[1];

    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
    ];

    return (
        <ul className="flex space-x-6">
            {links.map((link, index) => (
                <li key={"navBarLink_" + index}>
                    <Link
                        href={link.href}
                        className={classNames({
                            "text-zinc-900":
                                link.href === currentLevel1Path &&
                                theme === "light",
                            "text-zinc-500":
                                link.href !== currentLevel1Path &&
                                theme === "light",
                            "text-zinc-600":
                                link.href === currentLevel1Path &&
                                theme === "dark",
                            " text-zinc-100":
                                link.href !== currentLevel1Path &&
                                theme === "dark",
                            "hover:text-zinc-800 transition-colors": true,
                        })}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavBarRoutes;
