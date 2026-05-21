import React, { useState } from "react";
import AddPlayer from "./AddPlayer";
import { useNavigate } from "react-router";
import getSeason from "../../utils/getSeason";

/** Form for creating a new session */
export default function SessionForm({ sessions, setSessions, players, setPlayers, setSeshAddBtnClicked }) {
    const [newSession, setNewSession] = useState({ opponent: "" });
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setNewSession((prev) => ({ ...prev, [name]: value }));
    }

    function handleRemovePlayer(playerId) {
        setPlayers(players.filter((player) => player.playerId !== playerId));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (players.length === 0) {
            alert("Add at least one player before starting a session.");
            return;
        }
        const date = new Date();
        const newEntry = { ...newSession, players, sessionId: crypto.randomUUID(), date, season: getSeason(date) };
        setSessions([...sessions, newEntry]);
        setNewSession({ opponent: "" });
        setPlayers([]);
        setSeshAddBtnClicked(false);
        navigate(`/session/${newEntry.sessionId}`);
    }

    return (
        <div>
            <form className="create-session-form" onSubmit={handleSubmit}>
                <section className="player-info-section">
                    <h3>Players</h3>
                    {players.map((player) => (
                        <div key={player.playerId}>
                            <p className="player-info">
                                {player.name} <i>#{player.number}</i>
                            </p>
                            <button
                                type="button"
                                className="remove-player-btn"
                                onClick={() => handleRemovePlayer(player.playerId)}>-</button>
                        </div>
                    ))}
                    <AddPlayer players={players} setPlayers={setPlayers} sessions={sessions}/>
                    
                </section>

                <section className="game-info-section">
                    <h3>Game</h3>
                    <label>
                        Opponent
                        <input
                            type="text"
                            name="opponent"
                            value={newSession.opponent}
                            onChange={handleChange}
                            placeholder="Optional"
                        />
                    </label>
                </section>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
