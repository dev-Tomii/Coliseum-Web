"use client";
import { useState, useEffect } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
} from "@nextui-org/react";

interface SeasonData {
    season0: any[];
    season1: any[];
    season2: any[];
    season3: any[];
    season4: any[];
}

export default function TableSeason({ season }: { season: string }) {
    const [data, setData] = useState<SeasonData>({
        season0: [],
        season1: [],
        season2: [],
        season3: [],
        season4: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSeason, setSelectedSeason] = useState("");
    const selectSeason = (season: string) => {
        setSelectedSeason(season);
    };

    useEffect(() => {
        fetch("https://api.npoint.io/d003302dd168de272005")
            .then((res) => res.json())
            .then((res) => setData(res))
            .then((res) => setIsLoading(false))
            .then((res) => setSelectedSeason(season));
    }, [season]);
    const sub0 = season.slice(0, 6);
    const sub1 = season.slice(6);

    if (isLoading) {
        return (
            <div className="flex mt-10 mx-auto justify-center min-h-[100vh]">
                <h1 className="text-3xl">Carregando...</h1>
            </div>
        );
    }

    return (
        <div className="py-5">
            <h2 className="text-center text-xl py-2 capitalize text-amber-400 font-bold">
                {sub0 + " " + sub1}
            </h2>
            <Table>
                <TableHeader>
                    <TableColumn>Clãs</TableColumn>
                    <TableColumn>Pontos</TableColumn>
                    <TableColumn>DQs</TableColumn>
                </TableHeader>
                <TableBody>
                    {data[selectedSeason as keyof SeasonData].map((clan: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell>{clan["clan"]}</TableCell>
                            <TableCell>{clan["pontos"]}</TableCell>
                            <TableCell>{clan["dqs"]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
