import React, { useState } from "react";

/** Inline form for adding a new OR exisiting player to the players list. */
export default function AddPlayer( {players, setPlayers, sessions} ) {
    const [addBtnClicked, setAddBtnClicked] = useState(false);
    const showForm = addBtnClicked;
    const [newPlayer, setNewPlayer] = useState({
        name: "",
        number: ""
    })

    const existingPlayers = [
        ...new Map(
            sessions.flatMap((s) => s.players).map((p) => [p.playerId, p])
        ).values()
    ];

    function handleChange(e) {
        const { name, value } = e.target;
        let sanitized = value;
        if (name === "name")   sanitized = value.replace(/[^a-zA-Z\s'-]/g, "");
        if (name === "number") sanitized = value.replace(/[^0-9]/g, "");
        setNewPlayer((prev) => ({ ...prev, [name]: sanitized }));
    }
    
    function handleAddPlayer(existingPlayer) {
        if (existingPlayer) {
            if (players.some((p) => p.number === existingPlayer.number)) {
                alert(`#${existingPlayer.number} is already in use.`);
                return;
            }
            setPlayers([...players, existingPlayer]);
            return;
        }
        if (!newPlayer.name || !newPlayer.number) return;
        const name = newPlayer.name.trim().replace(/\b\w/g, (c) => c.toUpperCase());
        if (players.some((p) => p.number === newPlayer.number)) {
            alert(`#${newPlayer.number} is already in use.`);
            return;
        }
        if (existingPlayers.some((p) => p.number === newPlayer.number && p.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} #${newPlayer.number} already exists. Use "Add Existing Player" instead.`);
            return;
        }
        setPlayers([...players, { ...newPlayer, name, playerId: crypto.randomUUID() }]);
        setNewPlayer({ name: "", number: "" });
        setAddBtnClicked(false);
    }

    return (
        <>
            {(!showForm) ? (
                <div className="add-player-div">
                    <button
                        id="add-player-btn"
                        onClick={() => setAddBtnClicked(true)}
                    >Create New Player</button>
                    <select
                        value=""
                        onChange={(e) => {
                            const player = existingPlayers.find((p) => p.playerId === e.target.value);
                            if (player) handleAddPlayer(player);
                        }}
                    >
                        <option value="">Add Existing Player</option>
                        {existingPlayers
                            .filter((p) => !players.some((sp) => sp.playerId === p.playerId))
                            .map((p) => (
                                <option key={p.playerId} value={p.playerId}>
                                    {p.name} #{p.number}
                                </option>
                            ))}
                    </select>
                </div>
            ) : (
                <div className="add-player-div">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        aria-label="Player name"
                        value={newPlayer.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="number"
                        placeholder="Number"
                        aria-label="Player number"
                        value={newPlayer.number}
                        onChange={handleChange}
                    />
                    <button type="button" onClick={() => handleAddPlayer()}>Done</button>
                    {players.length > 0 && (
                        <button type="button" onClick={() => setAddBtnClicked(false)}>Cancel</button>
                    )}
                </div>
            )}
        </>
    )
}