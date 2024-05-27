'use client'
import React, { useState, useEffect } from 'react';
import './seasonClans.css';
import ClanCard from './clancard'

export default function SeasonClans() {
    const [data,setData] = useState([]);
    const fetchData = () => {fetch('https://api.npoint.io/6488fb58f82a76e31664').then(res => res.json()).then(res => setData(res)).then(res => console.log(res))}
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className='box'>
            <h1 className='text-6xl my-6 border-4 p-4 mb-7'>Clãs da Season</h1>
            <div className="cards flex-wrap">
                {data.map(i => (<><ClanCard clanname={i['clan']} clanlogo={`${i['clan']}`} clanddesc={i['description']} clanleader={i['leader']} clancoleader={i['coleader']} ct={i['CT']}></ClanCard></>))}
            </div>
        </div>
    );
}