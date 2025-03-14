"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";

interface Props {
    routes: { label: string; href: string }[];
}

const NavBarRoutes = ({ routes }: Props) => {
    // Path, is mounted to the server?, and current theme
    const currentPath = usePathname();
    const currentLevel1Path = "/" + currentPath.split("/")[1];
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <ul className="flex space-x-6">
            {routes.map((route, index) => (
                <li key={"navBarLink_" + index}>
                    <Link
                        href={route.href}
                        className={classNames({
                            "font-bold underline":
                                route.href === currentLevel1Path,
                            "": route.href !== currentLevel1Path,
                            "transition-colors": true,
                            THEMED: true,
                        })}
                    >
                        {route.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavBarRoutes;
