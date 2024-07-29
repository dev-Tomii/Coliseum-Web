/* eslint-disable @next/next/no-img-element */
"use client";
import { saveAs } from "file-saver";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import {
    Autocomplete,
    AutocompleteSection,
    AutocompleteItem,
} from "@nextui-org/autocomplete";
import { Input, Button, Divider, Link, Image } from "@nextui-org/react";
import { useState, useEffect } from "react";
import "./gerador.css";
import domtoimage from "dom-to-image";

function downloadCard() {
    var nodeToDownload = document.getElementById("print");
    /* var nodesToEnlarge = Array.from(
        document.getElementsByClassName("hq") as HTMLCollectionOf<HTMLElement>
    );
    for (let i = 0; i < nodesToEnlarge.length; i++) {
        nodesToEnlarge[i].style.transform = "scale(2)";
    } */
    domtoimage.toBlob(nodeToDownload as Node).then(function (blob) {
        saveAs(blob, "card.png");
    });

    /* setTimeout(function () {
        for (let i = 0; i < nodesToEnlarge.length; i++) {
            nodesToEnlarge[i].style.transform = "scale(1)";
        }
    }, 700); */
}

export default function Gerador() {
    const colorVariants = {
        "": "base",
        Vasco: "black",
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

    const textColors = {
        base: ["semNome", "semCusto", "semLenda"],
        black: ["blackNome", "blackCusto", "blackLenda"],
        green: ["greenNome", "greenCusto", "greenLenda"],
        red: ["redNome", "redCusto", "redLenda"],
        yellow: ["yellowNome", "yellowCusto", "yellowLenda"],
        teamyellow: [
            "teamyellowNome",
            "teamyellowCusto",
            "teamyellowLenda",
        ],
        cyan: ["cyanNome", "cyanCusto", "cyanLenda"],
        blue: ["blueNome", "blueCusto", "blueLenda"],
        purple: ["purpleNome", "purpleCusto", "purpleLenda"],
        pink: ["pinkNome", "pinkCusto", "pinkLenda"],
        brown: ["brownNome", "brownCusto", "brownLenda"],
        white: ["whiteNome", "whiteCusto", "whiteLenda"],
        orange: ["orangeNome", "orangeCusto", "orangeLenda"],
    };

    const [name, setName] = useState("");
    const [cla, setCla] = useState("");
    const [rank, setRank] = useState("");
    const [lenda, setLenda] = useState("");
    const [data, setData] = useState<any[]>([]);
    const [lendas, setLendas] = useState<any[]>([]);
    const [custo, setCusto] = useState(0);

    const [src1, setSrc1] = useState("/Cards/bgs/base.png");
    const [src2, setSrc2] = useState("/Cards/frames/base.png");
    const [src3, setSrc3] = useState("/Cards/grad/base.png");
    const [src4, setSrc4] = useState("/Cards/legends/base.png");
    const [src5, setSrc5] = useState("/Cards/stars/120.png");

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

    const getColor = (name: string): string[] => {
        for (let item in data) {
            if (data[item]["nome"].toLowerCase() == name.toLowerCase()) {
                const clan = data[item]["clan"] as keyof typeof colorVariants;
                const variant = colorVariants[clan] as keyof typeof textColors;
                return textColors[variant];
            }
        }
        return ["", "", ""];
    };

    const getRank = (name: string): string => {
        for (let item in data) {
            if (data[item]["nome"].toLowerCase() == name.toLowerCase())
                return data[item]["hierarquia"];
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
        setSrc5(`/Cards/stars/${cost}.png`);
        setRank(getRank(name));
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
            .then((res) => setLendas(res));
    }, []);
    return (
        <div className="flex mx-auto justify-center items-center min-h-[100vh] flex-col">
            <div
                id="print"
                className="flex items-center mb-5 relative shadow-2xl hq"
            >
                <img className="absolute hq " src={src1} alt="bg"></img>
                <img className="absolute hq " src={src4} alt="legend"></img>
                <img className="absolute hq " src={src3} alt="grad"></img>
                <img className="absolute hq " src={src2} alt="frame"></img>
                <p
                    className={
                        "absolute enchanted text-3xl bottom-8 ml-6 text-center hq " +
                        getColor(name)[1]
                    }
                >
                    {rank}
                </p>
                <p
                    className={
                        "absolute enchanted text-4xl bottom-2 ml-4 text-center hq " +
                        getColor(name)[1]
                    }
                >
                    Custo: {custo}
                </p>
                <p
                    className={
                        "absolute enchanted text-3xl font-semibold top-2 ml-6 text-left hq " +
                        getColor(name)[0]
                    }
                >
                    {name}
                </p>
                <p
                    className={
                        "absolute enchanted text-xl top-8 ml-6 text-left capitalize hq " +
                        getColor(name)[2]
                    }
                >
                    {lenda}
                </p>
                <img
                    className="relative h-[50vh] hq "
                    src={custo != 0 ? src5 : "/Cards/stars/120.png"}
                    alt="stars"
                ></img>
            </div>

            <Card className="flex items-center w-[30vw] p-3">
                <CardBody className="flex flex-wrap flex-row justify-around items-center">
                    <Autocomplete
                        allowsCustomValue
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
                            <AutocompleteItem
                                className="capitalize"
                                key={lendas.indexOf(item)}
                            >
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
                    <Button
                        color="success"
                        className="flex w-[80%] m-2"
                        onPress={downloadCard}
                    >
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
