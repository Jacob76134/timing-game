"use client"
import React, { useEffect, useState } from 'react';

export default function GameENGINE({children, playerCount}:any) {

    const [time, setTime] = useState(10);
    const [start, setStart] = useState(false);

    const [gamePhase, setGamePhase] = useState('attack');

    useEffect(() => {
        let interval: any;
        if (start && time >= 0) {
            interval = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
        } else if (start && gamePhase === 'attack' && time < 0){
            setTime(10);
            setGamePhase('defend');
        } else if (start && gamePhase === 'defend' && time < 0){
            interval = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
            setGamePhase('resolve');
            setStart(false);
        } else {
            setTime(10);
            setStart(false);
            setGamePhase('resolve');
        }
        return () => clearInterval(interval);
    }, [start, time]);

    return (
        <div className={playerCount != 0 ? 'flex flex-col' : 'hidden'}>
            <div className="gameENV my-10">
                <h2>Game Screen</h2>
                <div className="time">{time}</div>
                <p className='text-red-600 cursor-pointer' onClick={() => setStart(!start)}>{start ? 'Stop' : 'Start'}</p>
            </div>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, { id: `${index + 1}`, time, start, gamePhase })
            )}
        </div>
    );
}