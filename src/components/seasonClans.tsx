'use client'
import React, { useState } from 'react';
import './seasonClans.css';
import ClanCard from './clancard'

export default function SeasonClans() {
    const [data,setData] = useState([]);
    fetch('http://api.npoint.io/6488fb58f82a76e31664').then(res => res.json()).then(res => setData(res));
    return (
        <div className='box'>
            <h1 className='text-6xl my-6 border-4 p-4 mb-7'>Clãs da Season</h1>
            <div className="cards flex-wrap">
                {data.map(i => (<><ClanCard clanname={i['clan']} clanlogo={`${i['clan']}`} clanddesc={i['description']} clanleader={i['leader']} clancoleader={i['coleader']}></ClanCard></>))}
            </div>
        </div>
    );
}