"use client";
import { useTheme } from "next-themes";
import { BsMoonStars, BsSun } from "react-icons/bs";

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => {
                theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
            className={
                "bg-opacity-2 p-1.5 rounded " +
                (theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-300")
            }
        >
            {theme === "dark" ? <BsMoonStars size={18} /> : <BsSun size={18} />}
        </button>
    );
};
