import React from "react";

/** Display all players as buttons */
export default function PlayerSelect({ session, newAction, setNewAction }) {
    return (
        <div className="player-select">
            <h3>Player</h3>
            {session.players.map((player) => (
                <button
                    type="button"
                    className={`player-btn${newAction.player?.number === player.number ? " selected" : ""}`}
                    key={player.number}
                    onClick={() => setNewAction((prev) => ({ ...prev, player }))}>
                        <p className="player-btn-name">{player.name}</p>
                        <p className="player-btn-num">#{player.number}</p>
                </button>
            ))}
        </div>
    );
}
