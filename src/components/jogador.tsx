"use client";
import {
    Card,
    CardHeader,
    CardFooter,
    Image,
    Autocomplete,
    AutocompleteItem,
    Input,
    Divider,
} from "@nextui-org/react";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

import React, { useState, useEffect, useCallback } from "react";
import { FaStar, FaStarHalf, FaSearch } from "react-icons/fa";
import { colorVariants } from "@/components/utils";
function stars(cost: number) {
    const totalStars = [];
    const completed = Math.floor(cost / 10 / 2);
    const semi = (cust: number) => ((cost / 10) % 2 != 0 ? 1 : 0);
    for (let i = 0; i < completed; i++) {
        totalStars.push(<FaStar key={i} />);
    }
    if (semi(cost) != 0) {
        totalStars.push(<FaStarHalf key={"half"} />);
    }
    return totalStars;
}

function getLegendImage(lendas: any, name: string) {
    name = name.toLowerCase();
    if (name == "desconhecido") {
        return "https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/a/ac/Avatar_Unknown_User.png";
    } else {
        const obj = lendas.find((lenda: any) => lenda.legend_name_key == name);
        if (obj == undefined) {
            return "https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/a/ac/Avatar_Unknown_User.png";
        } else {
            return obj["thumbnail"];
        }
    }
}

export default function Jogador() {
    const [lendas, setLendas] = useState([]);
    const [players, setPlayers] = useState([]);
    const [clans, setClans] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(11);
    const [search, setSearch] = useState("");
    const [clanFilter, setClanFilter] = useState("");
    const [costFilter, setCostFilter] = useState("");
    const [legendFilter, setLegendFilter] = useState("");
    const [rankFilter, setRankFilter] = useState("");

    const hierarquias = ["Membro", "Lider"];
    const custos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

    const filtrarJogadores = (player: any) => {
        return (
            (player.nome.toLowerCase().includes(search.toLowerCase()) ||
                search == "") &&
            (player.clan.toLowerCase().includes(clanFilter.toLowerCase()) ||
                clanFilter == "") &&
            (player.hierarquia.toLowerCase() == rankFilter.toLowerCase() ||
                rankFilter == "") &&
            (player.custo == costFilter || costFilter == "") &&
            (player.lenda.toLowerCase().includes(legendFilter.toLowerCase()) ||
                legendFilter == "")
        );
    };

    useEffect(() => {
        fetch("https://api.npoint.io/a61cbe38560a9ac5d278")
            .then((res) => res.json())
            .then((res) => setLendas(res));
        fetch("https://api.npoint.io/73701443fb9f9a913c0b")
            .then((res) => res.json())
            .then((res) => setPlayers(res.jogadores));
        fetch("https://api.npoint.io/6488fb58f82a76e31664")
            .then((res) => res.json())
            .then((res) => setClans(res));
    }, []);

    return (
        <div className="flex flex-col">
            <div className="md:flex flex-auto mx-auto justify-center hidden">
                <Input
                    value={search}
                    onValueChange={setSearch}
                    className="mx-2 mb-5"
                    label="Digite um jogador"
                />
                <Autocomplete
                    value={clanFilter}
                    onInputChange={setClanFilter}
                    className="mx-2 mb-5"
                    label="Selecione um clã"
                >
                    {clans.map((clan, index) => (
                        <AutocompleteItem key={index} value={clan["clan"]}>
                            {clan["clan"]}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                    value={costFilter}
                    onInputChange={setCostFilter}
                    className="mx-2 mb-5"
                    label="Selecione um custo"
                >
                    {custos.reverse().map((custo, index) => (
                        <AutocompleteItem key={index} value={custo}>
                            {`${custo}`}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                    className="mx-2 mb-5"
                    label="Selecione uma hierarquia"
                    value={rankFilter}
                    onInputChange={setRankFilter}
                >
                    {hierarquias.reverse().map((item, index) => (
                        <AutocompleteItem key={index} value={item}>
                            {item}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                    className="mx-2 mb-5"
                    label="Selecione uma lenda"
                    value={legendFilter}
                    onInputChange={setLegendFilter}
                >
                    {lendas.map((item, index) => (
                        <AutocompleteItem
                            key={index}
                            className="capitalize"
                            value={item["legend_name_key"]}
                        >
                            {item["legend_name_key"]}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
            </div>
            <div className="flex md:hidden flex-col">
                <Accordion>
                    <AccordionItem key={1} title="Filters" className="w-[95vw] mx-auto">
                        <Input
                            value={search}
                            onValueChange={setSearch}
                            className="mx-2 mb-5 w-[90vw]"
                            label="Digite um jogador"
                        />
                        <Autocomplete
                            value={clanFilter}
                            onInputChange={setClanFilter}
                            className="mx-2 mb-5 w-[90vw]"
                            label="Selecione um clã"
                        >
                            {clans.map((clan, index) => (
                                <AutocompleteItem
                                    key={index}
                                    value={clan["clan"]}
                                >
                                    {clan["clan"]}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                        <Autocomplete
                            value={costFilter}
                            onInputChange={setCostFilter}
                            className="mx-2 mb-5 w-[90vw]"
                            label="Selecione um custo"
                        >
                            {custos.reverse().map((custo, index) => (
                                <AutocompleteItem key={index} value={custo}>
                                    {`${custo}`}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                        <Autocomplete
                            className="mx-2 mb-5 w-[90vw]"
                            label="Selecione uma hierarquia"
                            value={rankFilter}
                            onInputChange={setRankFilter}
                        >
                            {hierarquias.reverse().map((item, index) => (
                                <AutocompleteItem key={index} value={item}>
                                    {item}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                        <Autocomplete
                            className="mx-2 mb-5 w-[90vw]"
                            label="Selecione uma lenda"
                            value={legendFilter}
                            onInputChange={setLegendFilter}
                        >
                            {lendas.map((item, index) => (
                                <AutocompleteItem
                                    key={index}
                                    className="capitalize"
                                    value={item["legend_name_key"]}
                                >
                                    {item["legend_name_key"]}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                    </AccordionItem>
                </Accordion>
                <Divider className="my-5"></Divider>
            </div>
            <div className="flex flex-wrap justify-center min-h-[100vh]">
                {lendas.length > 0 &&
                    players.length > 0 &&
                    players
                        .filter(filtrarJogadores)
                        /* .slice(indiceInicio, indiceFin) */
                        .map((player, index) => (
                            <Card
                                key={index}
                                isFooterBlurred
                                className="w-[220px] h-[250px] mx-4 my-2"
                            >
                                <CardHeader className="absolute z-10 top-0 flex-row items-start justify-center bg-black/50 border-b-1 border-zinc-100/50">
                                    {stars(player["custo"])}
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card example background"
                                    className="z-0 w-full h-full object-cover"
                                    src={`${getLegendImage(
                                        lendas,
                                        player["lenda"]
                                    )}`}
                                />
                                <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 text-center justify-center">
                                    <div className="flex flex-col text-center">
                                        <h2
                                            className={`${
                                                colorVariants[player["clan"]]
                                            } font-bold`}
                                        >
                                            {player["clan"]}
                                        </h2>
                                        <h3 className="text-base">
                                            {player["nome"]}
                                        </h3>
                                        <p className="text-tiny capitalize">
                                            {player["hierarquia"]}
                                        </p>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
            </div>
        </div>
    );
}
