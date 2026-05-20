import React, { useState } from "react";

/** Inline form for adding a player to the multi-player list. */
export default function AddPlayer( {players, setPlayers} ) {
    const [addBtnClicked, setAddBtnClicked] = useState(false);
    const showForm = addBtnClicked || players.length === 0;
    const [newPlayer, setNewPlayer] = useState({
        name: "",
        number: ""
    })

    function handleChange (e) {
        const {name, value} = e.target;
        setNewPlayer((prev) => ({
            ...prev, 
            [name]: value
        }))
    }
    
    function handleAddPlayer() {
        if (!newPlayer.name || !newPlayer.number) return;
        if (players.some((p) => p.number === newPlayer.number)) {
            alert(`#${newPlayer.number} is already in use.`);
            return;
        }
        const name = newPlayer.name.trim().replace(/\b\w/g, (c) => c.toUpperCase());
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
                    >+</button>
                </div>
            ) : (
                <div className="add-player-div">
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={newPlayer.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Number
                        <input
                            type="text"
                            name="number"
                            value={newPlayer.number}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="button" onClick={handleAddPlayer}>Done</button>
                    {players.length > 0 && (
                        <button type="button" onClick={() => setAddBtnClicked(false)}>Cancel</button>
                    )}
                </div>
            )}
        </>
    )
}