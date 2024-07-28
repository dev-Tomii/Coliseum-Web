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

const calcularPuntuacionTotal = (ct: number[]): number => {
    const gold = 3*ct[0];
    const silver = 2*ct[1];
    const bronze = ct[0]
    return gold + silver + bronze
};

const compararClanes = (clanA: any, clanB: any): number => {
    const puntuacionA = calcularPuntuacionTotal(clanA["CT"]);
    const puntuacionB = calcularPuntuacionTotal(clanB["CT"]);

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
        )
    }

    return (
        <>
            <div className="container py-5 mx-auto">
                <Table className="py-20 my-20 px-5 mx-5">
                    <TableHeader>
                        <TableColumn className="text-base">PR</TableColumn>
                        <TableColumn className="text-base">Clãs</TableColumn>
                        <TableColumn className="text-base items-center">
                            <PiMedalFill color="gold" size={20}></PiMedalFill>
                        </TableColumn>
                        <TableColumn className="text-base items-center">
                            <PiMedalFill color="silver" size={20}></PiMedalFill>
                        </TableColumn>
                        <TableColumn className="text-base items-center">
                            <PiMedalFill
                                color="chocolate"
                                size={20}
                            ></PiMedalFill>
                        </TableColumn>
                    </TableHeader>
                    <TableBody items={data}>
                        {(item) => (
                            <TableRow key={data.indexOf(item)}>
                                <TableCell className="text-lg">
                                    {data.indexOf(item) + 1}
                                </TableCell>
                                <TableCell className="text-lg">
                                    {item["clan"]}
                                </TableCell>
                                <TableCell className="text-lg">
                                    {item["CT"][0]}
                                </TableCell>
                                <TableCell className="text-lg">
                                    {item["CT"][1]}
                                </TableCell>
                                <TableCell className="text-lg">
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
