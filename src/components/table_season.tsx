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

export default function Table_Season({ season }: { season: string }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.npoint.io/d003302dd168de272005"
                );
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []);
    const sub0 = season.slice(0, 6);
    const sub1 = season.slice(6);
    return (
        <div className="py-5">
            <h2 className="text-center text-xl py-2 capitalize text-amber-400 font-bold">{sub0 + " " + sub1}</h2>
            {data.length === 0 ? (
                <p>Cargando...</p>
            ) : (
                <Table>
                    <TableHeader>
                        <TableColumn>Clãs</TableColumn>
                        <TableColumn>Pontos</TableColumn>
                        <TableColumn>DQs</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {data[season].map(
                            (clan, index) => (
                                <TableRow key={index}>
                                    <TableCell>{clan.clan}</TableCell>
                                    <TableCell>{clan.pontos}</TableCell>
                                    <TableCell>{clan.dqs}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
