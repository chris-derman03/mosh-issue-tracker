import React from "react";
import NavLogo from "./NavLogo";
import NavBarRoutes from "./NavBarRoutes";
import { ThemeChanger } from "../ThemeChanger";

const routes = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
];

const NavBar = ({ className }: { className: string }) => {
    return (
        <nav
            className={
                "flex space-x-6 border-b px-5 items-center THEMED THEMED-bg " +
                className
            }
        >
            <NavLogo />

            <NavBarRoutes routes={routes} />

            <div className="flex ml-auto">
                <ThemeChanger />
            </div>
        </nav>
    );
};

export default NavBar;
