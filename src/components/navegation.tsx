import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image} from "@nextui-org/react";
import imgLogo from "../imgs/logo.png";

export default function Navegation() {
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <Link color='foreground' href='/'><Image src={'/logo.png'} width={100} alt='Home'></Image></Link>
                    
                </NavbarBrand>
                <NavbarContent>
                    <NavbarItem>
                        <Link color='foreground' href='/sobre'>Sobre</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color='foreground' href='/funcionamento'>Funcionamento</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color='foreground' href='/pr'>Power Ranking</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color='foreground' href='/tabela'>Tabela</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color='foreground' href='#'>Jogadores</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color='foreground' href='#'>Gerador de Cartas</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
}