"use client";

import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { PiMedalFill } from "react-icons/pi";

const calcularPuntuacionTotal = (ct: number[], seasonsWon: number): number => {
    const gold = 3 * ct[0];
    const silver = 2 * ct[1];
    const bronze = ct[0];
    const seasons = 4 * seasonsWon;
    return seasons + gold + silver + bronze;
};

const compararClanes = (clanA: any, clanB: any): number => {
    const puntuacionA = calcularPuntuacionTotal(clanA["CT"], clanA["seasons"]);
    const puntuacionB = calcularPuntuacionTotal(clanB["CT"], clanB["seasons"]);

    return puntuacionB - puntuacionA;
};

export default function Pr() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.npoint.io/6488fb58f82a76e31664")
            .then((res) => res.json())
            .then((res) => res.sort(compararClanes))
            .then((res) => setData(res))
            .then((res) => setIsLoading(false));
    }, []);

    if (isLoading) {
        return (
            <div className="flex mt-10 mx-auto justify-center min-h-[100vh]">
                <h1 className="text-3xl">Carregando...</h1>
            </div>
        );
    }

    return (
        <>
            <div className="container py-5 mx-auto">
                <Table className="py-20 my-20 px-1 md:px-5 mx-1 md:mx-5 w-[95vw]">
                    <TableHeader className="w-[90vw]">
                        <TableColumn className="md:text-base text-xs">PR</TableColumn>
                        <TableColumn className="md:text-base text-xs">Clãs</TableColumn>
                        <TableColumn className="md:text-base text-xs">Seasons</TableColumn>
                        <TableColumn className="md:text-base items-center text-xs">
                            <PiMedalFill color="gold" size={20}></PiMedalFill>
                        </TableColumn>
                        <TableColumn className="md:text-base items-center text-xs">
                            <PiMedalFill color="silver" size={20}></PiMedalFill>
                        </TableColumn>
                        <TableColumn className="md:text-base items-center text-xs">
                            <PiMedalFill
                                color="chocolate"
                                size={20}
                            ></PiMedalFill>
                        </TableColumn>
                    </TableHeader>
                    <TableBody items={data}>
                        {(item) => (
                            <TableRow key={data.indexOf(item)}>
                                <TableCell className="text-xs md:text-lg">
                                    {data.indexOf(item) + 1}
                                </TableCell>
                                <TableCell className="text-xs md:text-lg">
                                    {item["clan"]}
                                </TableCell>
                                <TableCell className="text-xs md:text-lg">
                                    {item["seasons"]}
                                </TableCell>
                                <TableCell className="text-xs md:text-lg">
                                    {item["CT"][0]}
                                </TableCell>
                                <TableCell className="text-xs md:text-lg">
                                    {item["CT"][1]}
                                </TableCell>
                                <TableCell className="text-xs md:text-lg">
                                    {item["CT"][2]}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
