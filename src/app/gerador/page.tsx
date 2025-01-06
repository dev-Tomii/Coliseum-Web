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
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { ranks, textColors, custos } from "@/components/utils";
function downloadCard() {
    var nodeToDownload = document.getElementById("print");
    domtoimage.toBlob(nodeToDownload as Node).then(function (blob) {
        saveAs(blob, "card.png");
    });
}

export default function Gerador() {
    const [name, setName] = useState("");
    const [lenda, setLenda] = useState<any>("");
    const [cla, setCla] = useState<any>("");
    const [custo, setCusto] = useState("0");
    const [rank, setRank] = useState("");

    const [colorA, setColorA] = useState("");
    const [colorB, setColorB] = useState("");
    const [colorC, setColorC] = useState("");

    const [data, setData] = useState<any[]>([]);
    const [lendas, setLendas] = useState<any[]>([]);
    const [clas, setClas] = useState<any[]>([]);

    const [src1, setSrc1] = useState("/Cards/Default/BG.png");
    const [src2, setSrc2] = useState("/Cards/Default/Grad.png");
    const [src3, setSrc3] = useState("/Cards/Default/Borda.png");
    const [src4, setSrc4] = useState("/Cards/legends/desconhecido.png");
    const [src5, setSrc5] = useState("/Cards/Stars/120.png");

    const changeStars = (amount: string) => {
        if (amount == "") {
            setCusto("0");
            setSrc5(`/Cards/Stars/120.png`);
        } else {
            setCusto(amount);
            setSrc5(`/Cards/Stars/${amount}.png`);
        }
    };

    const changeColor = (key: any) => {
        setCla(key);
        const clanname = clas[key["currentKey"]]["clan"];
        const clan = clas[key["currentKey"]]["clan"] as keyof typeof textColors;
        setSrc1(`/Cards/${clanname}/BG.png`);
        setSrc2(`/Cards/${clanname}/Grad.png`);
        setSrc3(`/Cards/${clanname}/Borda.png`);
        setColorA(textColors[clan][0]);
        setColorB(textColors[clan][1]);
        setColorC(textColors[clan][2]);
    };

    const mudarLenda = (legend: any) => {
        if (legend != "") {
            const len = lendas[legend["currentKey"]]["legend_name_key"];
            setLenda(legend);
            setSrc4(`/Cards/legends/${len}.png`);
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
        fetch("https://api.npoint.io/6488fb58f82a76e31664")
            .then((res) => res.json())
            .then((res) => setClas(res));
    }, []);
    return (
        <div className="flex mx-auto justify-center items-center min-h-[100vh] flex-col">
            <div
                id="print"
                className="flex items-center mb-5 relative shadow-2xl w-[358px] h-[470px]"
            >
                <img
                    className="absolute w-[358px] h-[470px]"
                    src={src1}
                    alt="bg"
                ></img>
                <img
                    className="absolute w-[358px] h-[470px] object-contain"
                    src={src4}
                    alt="legend"
                ></img>
                <img
                    className="absolute w-[358px] h-[470px]"
                    src={src3}
                    alt="grad"
                ></img>
                <img
                    className="absolute w-[358px] h-[470px]"
                    src={src2}
                    alt="frame"
                ></img>
                <span className={"absolute enchanted text-3xl bottom-8 ml-6 " + colorB}>{rank}</span>
                <span className={"absolute enchanted text-4xl bottom-2 text-center ml-4 " + colorB}>Custo: {custo}</span>
                <p
                    className={
                        "absolute enchanted text-3xl font-semibold top-2 ml-6 text-left " +
                        colorA
                    }
                >
                    {name}
                </p>
                <p
                    className={
                        "absolute enchanted text-xl top-8 ml-6 text-left capitalize " +
                        colorC
                    }
                >
                    {lendas[lenda["currentKey"]] != undefined
                        ? lendas[lenda["currentKey"]]["legend_name_key"]
                        : ""}
                </p>
                <img
                    className="relative w-[358px] h-[470px] hq "
                    src={custo != "0" ? src5 : "/Cards/stars/120.png"}
                    alt="stars"
                ></img>
            </div>

            <Card className="flex items-center mb-3 w-[90vw] md:w-[70vw] lg:w-[40vw] p-3">
                <CardBody className="flex flex-wrap flex-row justify-around items-center">
                    <Autocomplete
                        allowsCustomValue
                        aria-label="nome"
                        variant="underlined"
                        defaultItems={data}
                        placeholder="Nome do jogador"
                        className="w-[40%] m-2"
                        onInputChange={setName}
                    >
                        {(item) => (
                            <AutocompleteItem key={data.indexOf(item)}>
                                {item["nome"]}
                            </AutocompleteItem>
                        )}
                    </Autocomplete>
                    <Select
                        aria-label="lenda"
                        variant="underlined"
                        placeholder="Selecione uma Lenda"
                        className="w-[40%] m-2"
                        selectedKeys={lenda}
                        onSelectionChange={mudarLenda}
                    >
                        {lendas.map((item, index) => (
                            <SelectItem className="capitalize" key={index}>
                                {item["legend_name_key"]}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select
                        aria-label="cla"
                        variant="underlined"
                        placeholder="Selecione um cla"
                        className="w-[40%] m-2"
                        selectedKeys={cla}
                        onSelectionChange={changeColor}
                    >
                        {clas.map((item, index) => (
                            <SelectItem className="capitalize" key={index}>
                                {item["clan"]}
                            </SelectItem>
                        ))}
                    </Select>
                    <Autocomplete
                        aria-label="custo"
                        variant="underlined"
                        defaultItems={custos}
                        placeholder="Custo do jogador"
                        className="w-[40%] m-2"
                        onInputChange={changeStars}
                    >
                        {(item) => (
                            <AutocompleteItem key={item.key} value={item.custo}>
                                {item.custo}
                            </AutocompleteItem>
                        )}
                    </Autocomplete>
                    <Autocomplete
                        aria-label="rank"
                        variant="underlined"
                        placeholder="Selecione um hierarquia"
                        className="w-[90%] m-2"
                        defaultItems={ranks}
                        onInputChange={setRank}
                    >
                        {(item) => (
                            <AutocompleteItem key={item.key} value={item.rank}>
                                {item.rank}
                            </AutocompleteItem>
                        )}
                    </Autocomplete>
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
