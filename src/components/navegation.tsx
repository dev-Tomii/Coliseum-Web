"use client";
import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Image,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
import { color } from "framer-motion";

export default function Navegation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { title: "Sobre", href: "/sobre", color: "f" },
        { title: "Funcionamento", href: "/funcionamento", color: "f" },
        { title: "Power Ranking", href: "/pr", color: "f" },
        { title: "Tabela", href: "/tabela", color: "f" },
        { title: "Jogadores", href: "/jogadores", color: "f" },
        { title: "Gerador de Cartas", href: "/gerador", color: "f" },
    ];

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link color="foreground" href="/">
                            <Image
                                src={"/logo.png"}
                                width={100}
                                alt="Home"
                            ></Image>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {navItems.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link
                                color={
                                    item.color == "f" ? "foreground" : "primary"
                                }
                                href={item.href}
                            >
                                {item.title}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarMenu>
                    {navItems.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link
                                color={
                                    item.color == "f" ? "foreground" : "primary"
                                }
                                className="w-full"
                                href={item.href}
                                size="lg"
                            >
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    );
}
