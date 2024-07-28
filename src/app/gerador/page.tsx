/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import {
    Autocomplete,
    AutocompleteSection,
    AutocompleteItem,
} from "@nextui-org/autocomplete";
import { Input, Button, Divider, Link, Image } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function Gerador() {
    const colorVariants = {
        "": "base",
        Vasco: "gray",
        "Bichos do Mato": "green",
        "Inimigos da Moda": "red",
        Firebirds: "yellow",
        Aurora: "cyan",
        Cruzeiro: "blue",
        "Patota da Moneymatch": "pink",
        "Complexo do Corinthians": "white",
        "Strawberry Tea": "purple",
        "Ranked Beasts": "orange",
        Olimpo: "teamyellow",
        "Blackwater WWC": "brown",
    };

    const [name, setName] = useState("");
    const [cla, setCla] = useState("");
    const [lenda, setLenda] = useState("");
    const [data, setData] = useState<any[]>([]);
    const [lendas, setLendas] = useState<any[]>([]);
    const [custo, setCusto] = useState(0);

    const [src1, setSrc1] = useState("/Cards/bgs/base.png");
    const [src2, setSrc2] = useState("/Cards/frames/base.png");
    const [src3, setSrc3] = useState("/Cards/grad/base.png");
    const [src4, setSrc4] = useState("/Cards/legends/base.png");

    const getCost = (name: string) => {
        for (let item in data) {
            if (data[item]["nome"].toLowerCase() == name.toLowerCase())
                return data[item]["custo"];
        }
        return 0;
    };

    const getClan = (name: string): string => {
        for (let item in data) {
            if (data[item]["nome"].toLowerCase() == name.toLowerCase())
                return data[item]["clan"];
        }
        return "";
    };

    const mudarCusto = (name: string) => {
        const cost = getCost(name);
        const clan = getClan(name) as keyof typeof colorVariants;
        setCusto(cost);
        setName(name);
        setCla(getClan(name));
        setSrc1(`/Cards/bgs/${colorVariants[clan]}.png`);
        setSrc2(`/Cards/frames/${colorVariants[clan]}.png`);
        setSrc3(`/Cards/grad/${colorVariants[clan]}.png`);
    };

    const mudarLenda = (legend: any) => {
        if (legend != "") {
            console.log(legend);
            setLenda(legend);
            setSrc4(`/Cards/legends/${legend}.png`);
        } else {
            setSrc4(`/Cards/legends/base.png`);
        }
    };

    useEffect(() => {
        fetch("https://api.npoint.io/73701443fb9f9a913c0b")
            .then((res) => res.json())
            .then((res) => setData(res.jogadores));
        fetch("https://api.npoint.io/a61cbe38560a9ac5d278")
            .then((res) => res.json())
            .then((res) => setLendas(res))
            
    }, []);
    return (
        <div className="flex mx-auto justify-center items-center min-h-[100vh] flex-col">
            <div className="flex items-center mb-5 relative shadow-2xl">
                <img className="absolute" src={src1} alt="bg"></img>
                <img className="absolute" src={src4} alt="legend"></img>
                <img className="absolute" src={src3} alt="grad"></img>
                <img className="relative h-[50vh]" src={src2} alt="frame"></img>
            </div>

            <Card className="flex items-center w-[30vw] p-3">
                <CardBody className="flex flex-wrap flex-row justify-around items-center">
                    <Autocomplete
                        aria-label="nome"
                        variant="underlined"
                        defaultItems={data}
                        placeholder="Nome do jogador"
                        className="w-[40%] m-2"
                        onInputChange={mudarCusto}
                    >
                        {(item) => (
                            <AutocompleteItem key={data.indexOf(item)}>
                                {item["nome"]}
                            </AutocompleteItem>
                        )}
                    </Autocomplete>
                    <Autocomplete
                        aria-label="nome"
                        variant="underlined"
                        defaultItems={lendas}
                        placeholder="Selecione uma Lenda"
                        className="w-[40%] m-2"
                        onInputChange={mudarLenda}
                    >
                        {(item) => (
                            <AutocompleteItem className="capitalize" key={lendas.indexOf(item)}>
                                {item["legend_name_key"]}
                            </AutocompleteItem>
                        )}
                    </Autocomplete>
                    <Input
                        className="flex w-[40%] m-2"
                        isReadOnly
                        label="Cla"
                        value={cla}
                    />
                    <Input
                        className="flex w-[40%] m-2"
                        isReadOnly
                        label="Custo"
                        value={custo.toString()}
                    />
                    <Button color="success" className="flex w-[80%] m-2">
                        Download
                    </Button>
                </CardBody>
                <Divider className="my-3"></Divider>
                <CardFooter className="flex justify-around">
                    <div className="box flex flex-col items-center">
                        <span className="flex w-[90%] justify-center text-amber-400">
                            Programacao
                        </span>
                        <Link color="foreground" href="https://x.com/gTomii_">
                            @gTomii_
                        </Link>
                        <Link
                            color="foreground"
                            href="https://x.com/NiceNameBH"
                        >
                            @NiceName
                        </Link>
                    </div>
                    <div className="box flex flex-col items-center">
                        <span className="flex w-[90%] text-center justify-center text-amber-400">
                            Projeto
                        </span>
                        <Link
                            color="foreground"
                            href="https://www.twitch.tv/yaksath"
                        >
                            @YaksaTH
                        </Link>
                        <span>⠀</span>
                    </div>
                    <div className="box flex flex-col items-center">
                        <span className="flex w-[90%] text-center justify-center text-amber-400">
                            Desenho
                        </span>
                        <Link color="foreground" href="https://x.com/codvox1">
                            @Codvox
                        </Link>
                        <span>⠀</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
