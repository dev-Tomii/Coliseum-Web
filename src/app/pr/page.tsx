'use client';

import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
} from "@nextui-org/react";
import { useState } from "react";
import { PiMedalFill } from "react-icons/pi";
export default function Pr() {
    const [data,setData] = useState([]);
    fetch('https://api.npoint.io/6488fb58f82a76e31664').then(res => res.json()).then(res => setData(res));
    return (
        <>
            <div className="container py-5 mx-auto">
                <Table className="py-20 my-20 px-5 mx-5">
                    <TableHeader>
                        <TableColumn className="text-base">PR</TableColumn>
                        <TableColumn className="text-base">Clãs</TableColumn>
                        <TableColumn className="text-base">Seasons</TableColumn>
                        <TableColumn className="text-base items-center"><PiMedalFill color="gold" size={20}></PiMedalFill></TableColumn>
                        <TableColumn className="text-base items-center"><PiMedalFill color="silver" size={20}></PiMedalFill></TableColumn>
                        <TableColumn className="text-base items-center"><PiMedalFill color="chocolate" size={20}></PiMedalFill></TableColumn>
                    </TableHeader>
                    <TableBody items={data}>
                        {(item) => (
                            <TableRow key={data.indexOf(item)}>
                                <TableCell className="text-lg">{data.indexOf(item)+1}</TableCell>
                                <TableCell className="text-lg">{item['clan']}</TableCell>
                                <TableCell className="text-lg">{item['seasons']}</TableCell>
                                <TableCell className="text-lg">{item['CT'][0]}</TableCell>
                                <TableCell className="text-lg">{item['CT'][1]}</TableCell>
                                <TableCell className="text-lg">{item['CT'][2]}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
