"use client"
import GameENGINE from './gameENGINE';
import Slider from './slider';
import React, { useEffect, useState } from 'react';

export default function GameENV() {
const [playerCount, setPlayerCount] = useState(0)

return (
    <>
    <div className={playerCount === 0 ? 'flex flex-col mb-4' : 'hidden'}>
        <h1>Skull Crusher</h1>
        <p>select your player count</p>
        <div className='cursor-pointer' onClick={() => setPlayerCount(1)}>1 Player</div>
        <div className='cursor-pointer' onClick={() => setPlayerCount(2)}>2 Players</div>
    </div>
    <div className={playerCount > 0 ? 'flex flex-col mb-4' : 'hidden'}>
        <h1>Skull Crusher</h1>
        <p className='cursor-pointer' onClick={()=> setPlayerCount(0)}>Return to Player Select</p>
        <GameENGINE playerCount={playerCount}>
            {playerCount > 0 ? (
                Array.from({ length: playerCount }, (_, index) => (
                    <Slider key={index} />
                ))
            ) : null}
        </GameENGINE>
    </div>
    </>
)
}