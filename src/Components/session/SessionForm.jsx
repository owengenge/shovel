import React, { useState } from "react";
import AddPlayer from "./AddPlayer";

/** Form for creating a new session. Supports single-player and multi-player modes. */
export default function SessionForm({ sessions, setSessions, players, setPlayers, setSeshAddBtnClicked }) {
    const [singlePlayer, setSinglePlayer] = useState(true);
    const [singlePlayerInfo, setSinglePlayerInfo] = useState({ name: "", number: "" });
    const [newSession, setNewSession] = useState({
        players: [],
        opponent: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setNewSession((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSinglePlayerChange(e) {
        const { name, value } = e.target;
        setSinglePlayerInfo((prev) => ({ ...prev, [name]: value }));
    }

    function handleRemovePlayer(number) {
        setPlayers(players.filter((player) => player.number !== number));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const sessionPlayers = singlePlayer ? [singlePlayerInfo] : players;
        const newEntry = { ...newSession, players: sessionPlayers, sessionId: crypto.randomUUID(), date: new Date() };
        const updated = [...sessions, newEntry];
        setSessions(updated);
        console.log("sessions:", updated);
        setNewSession({ players: [], team: "", opponent: "" });
        setSinglePlayerInfo({ name: "", number: "" });
        setSeshAddBtnClicked(false);
    }

    return (
        <div>
            <form className="create-session-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Tracking Mode</legend>
                    <label>
                        <input
                            type="radio"
                            name="mode"
                            checked={singlePlayer}
                            onChange={() => setSinglePlayer(true)}
                        />
                        One Player
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="mode"
                            checked={!singlePlayer}
                            onChange={() => setSinglePlayer(false)}
                        />
                        Multiple Players
                    </label>
                </fieldset>

                {singlePlayer ? (
                    <section className="player-info-section">
                        <h3>Player</h3>
                        <label>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={singlePlayerInfo.name}
                                onChange={handleSinglePlayerChange}
                                required
                            />
                        </label>
                        <label>
                            Jersey Number
                            <input
                                type="text"
                                name="number"
                                value={singlePlayerInfo.number}
                                onChange={handleSinglePlayerChange}
                                required
                            />
                        </label>
                    </section>
                ) : (
                    <section className="player-info-section">
                        <h3>Players</h3>
                        {players.map((player) => (
                            <div key={player.number}>
                                <p className="player-info">
                                    {player.name} <i>#{player.number}</i>
                                </p>
                                <button
                                    type="button"
                                    className="remove-player-btn"
                                    onClick={() => handleRemovePlayer(player.number)}>-</button>
                            </div>

                        ))}
                        <AddPlayer players={players} setPlayers={setPlayers} />
                    </section>
                )}

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