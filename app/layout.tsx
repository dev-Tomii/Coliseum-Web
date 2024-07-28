import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navegation from "./components/navegation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Coliseum Web",
    description: "NextJS + NextUI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <div className="img-bg">
                    <Providers>
                        <Navegation></Navegation>
                        {children}
                    </Providers>
                </div>
            </body>
        </html>
    );
}
