"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={
                "bg-opacity-2 p-1.5 rounded " +
                (theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-300")
            }
        >
            {theme === "dark" ? <BsMoonStars size={18} /> : <BsSun size={18} />}
        </button>
    );
};
