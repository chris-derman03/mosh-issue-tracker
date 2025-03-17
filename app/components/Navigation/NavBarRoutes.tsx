"use client";

import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";

interface Props {
    routes: { label: string; href: string }[];
}

const NavBarRoutes = ({ routes }: Props) => {
    const currentPath = usePathname();
    const currentLevel1Path = "/" + currentPath.split("/")[1];

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
