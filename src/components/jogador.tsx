"use client";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
} from "@nextui-org/react";

import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

export function getColor(clan: string, clans: any): string {
    var color = '';
    clans.forEach((item: any) => {
        if (item.clan == clan) {
            color = item.color;
        }
    });
    return color;
}

export default function Jogador() {
    const [lendas, setLendas] = useState([]);
    const [players, setPlayers] = useState([]);
    const [clans, setClans] = useState([]);

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
        <>
            {lendas.length > 0 && players.length > 0 && clans.length > 0 && (
                <Card isFooterBlurred className="w-[220px] h-[250px]">
                    <CardHeader className="absolute z-10 top-0 flex-row items-start justify-center bg-black/50 border-b-1 border-zinc-100/50">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full -translate-y-6 object-cover"
                        src={lendas[0].thumbnail}
                    />
                    <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 text-center justify-center">
                        <div className="flex flex-col text-center">
                            <h2 className={'text-' + getColor(players[1].clan, clans) + '-500'}>{players[1].clan}</h2>
                            <h3 className="text-base">Kaito</h3>
                            <p className="text-tiny">Leader</p>
                        </div>
                    </CardFooter>
                </Card>
            )}
        </>
    );
}
