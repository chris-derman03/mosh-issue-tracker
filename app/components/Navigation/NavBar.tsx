import React from "react";
import NavLogo from "./NavLogo";
import NavBarRoutes from "./NavBarRoutes";
import { ThemeChanger } from "../ThemeChanger";

const NavBar = () => {
    const routes = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
    ];

    return (
        <nav className="flex space-x-6 border-b px-5 h-14 items-center mb-5 THEMED THEMED-bg">
            <NavLogo />

            <NavBarRoutes routes={routes} />

            <div className="flex ml-auto">
                <ThemeChanger />
            </div>
        </nav>
    );
};

export default NavBar;
