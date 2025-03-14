import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import NavBar from "./components/Navigation/NavBar";
import { ThemeProvider } from "next-themes";

const globalFont = localFont({
    src: "../public/fonts/ModernTypewriter-zrOYw.ttf",
    variable: "--global-font",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="h-screen w-screen flex flex-col">
                <ThemeProvider attribute={"class"}>
                    <Theme
                        className={`${globalFont.className} antialiased THEME THEMED-bg`}
                        radius="large"
                    >
                        <NavBar className="h-1/18" />
                        <main className="h-17/18 px-5 flex justify-center">
                            {children}
                        </main>
                    </Theme>
                </ThemeProvider>
            </body>
        </html>
    );
}
