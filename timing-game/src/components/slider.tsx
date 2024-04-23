"use client"

export default function Slider({ time, start, gamePhase, id }: any) {
    console.log(id)
    return (
        <div className="mb-4">
            <p>Player: {id}</p>
            <p>Game is {start ? 'running' : 'paused'}</p>
            <p>Game phase: { gamePhase === 'resolve' ? gamePhase : gamePhase === 'attack' && id === '1' ? 'angle' : gamePhase === 'defend' && id === '2' ? 'angle' : 'strength'}</p>
        </div>
    );
}