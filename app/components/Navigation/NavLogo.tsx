"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoImage from "@/public/images/logo.webp";
import logoImageDark from "@/public/images/logoDark.webp";

const NavLogo = () => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div>
            <Link href="/">
                <Image
                    src={theme === "dark" ? logoImageDark : logoImage}
                    alt="Home"
                    width={35}
                />
            </Link>
        </div>
    );
};

export default NavLogo;
