import type { Metadata } from "next";
import { Merriweather, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const oswald = Oswald({
    variable: "--font-sans",
    subsets: ["latin"],
});

const merriweather = Merriweather({
    variable: "--font-serif",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Akita One Japan | Your Discovery Partner",
    description: "Travel With Us, Your Discovery Partner",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${oswald.variable} ${merriweather.variable} antialiased`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
