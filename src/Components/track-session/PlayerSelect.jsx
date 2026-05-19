import React from "react";

/** Display all players as buttons */
export default function PlayerSelect({ session, newAction, setNewAction }) {
    if (!session) return null;

    return (
        <div className="player-select-div">
            <h3>Player</h3>
            <div className="player-select">
                {session.players.map((player) => (
                    <button
                        type="button"
                        className={`player-btn${newAction.player?.number === player.number ? " selected" : ""}`}
                        key={player.number}
                        onClick={() => setNewAction((prev) => ({ ...prev, player }))}>
                            <p className="player-btn-name">{player.name}</p>
                            <p className="player-btn-num"><i>#{player.number}</i></p>
                    </button>
                ))}
            </div>
        </div>
    );
}
