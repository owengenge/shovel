import React, { useState } from "react";
import AddPlayer from "./AddPlayer";

/** Form for creating a new session. Supports single-player and multi-player modes. */
export default function SessionForm({ sessions, setSessions, players, setPlayers, setSeshAddBtnClicked }) {
    const [singlePlayer, setSinglePlayer] = useState(true);
    const [singlePlayerInfo, setSinglePlayerInfo] = useState({ name: "", number: "" });
    const [newSession, setNewSession] = useState({
        players: [],
        team: ""
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

    function handleSubmit(e) {
        e.preventDefault();
        const sessionPlayers = singlePlayer ? [singlePlayerInfo] : players;
        setSessions([
            ...sessions,
            {
                ...newSession,
                players: sessionPlayers,
                sessionId: crypto.randomUUID(),
                date: new Date()
            },
        ]);
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
                        <h3>Player Info</h3>
                        <label>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={singlePlayerInfo.name}
                                onChange={handleSinglePlayerChange}
                            />
                        </label>
                        <label>
                            Jersey Number
                            <input
                                type="text"
                                name="number"
                                value={singlePlayerInfo.number}
                                onChange={handleSinglePlayerChange}
                            />
                        </label>
                    </section>
                ) : (
                    <section className="player-info-section">
                        <h3>Players</h3>
                        {players.map((player) => (
                            <p key={player.name} className="player-info">
                                {player.name} <i>#{player.number}</i>
                            </p>
                        ))}
                        <AddPlayer players={players} setPlayers={setPlayers} />
                    </section>
                )}

                <section className="game-info-section">
                    <h3>Game Info</h3>
                    <label>
                        Opponent
                        <input
                            type="text"
                            name="opponent"
                            value={newSession.opponent}
                            onChange={handleChange}
                        />
                    </label>
                </section>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}