import React, { useState } from "react";

/** Select dropdown for choosing a player, ordered by most recently used. */
export default function PlayerDropdown({ players, setNewAction }) {
    const [orderedPlayers, setOrderedPlayers] = useState(players);

    function handleChange(e) {
        const selected = players.find((p) => p.number === e.target.value);
        setOrderedPlayers([selected, ...orderedPlayers.filter((p) => p.number !== selected.number)]);
        setNewAction((prev) => ({ ...prev, player: selected }));
    }

    return (
        <select id="player-dropdown" name="player" onChange={handleChange} defaultValue="">
            <option value="" disabled>Select Player</option>
            {orderedPlayers.map((player) => (
                <option key={player.number} value={player.number}>
                    {player.name} #{player.number}
                </option>
            ))}
        </select>
    );
}
