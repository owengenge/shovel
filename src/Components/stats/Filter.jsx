import React from "react";

/** Dropdown that updates filters on selection. Also displays the unique items to filter */
export default function Filter({ setFilters, type, sessions }) {

    function handleSelect(e) {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    }

    switch (type) {
        case "player": {
            const uniquePlayers = [
                ...new Map(
                    sessions.flatMap((s) => s.players).map((p) => [p.playerId, p])
                ).values()
            ];
            return (
                <select name="playerId" onChange={handleSelect}>
                    <option value="">All Players</option>
                    {uniquePlayers.map((p) => (
                        <option key={p.playerId} value={p.playerId}>
                            {p.name} #{p.number}
                        </option>
                    ))}
                </select>
            );
        }
        case "session":
            return (
                <select name="session" onChange={handleSelect}>
                    <option value="">All Sessions</option>
                    {sessions.map((s) => (
                        <option key={s.sessionId} value={s.sessionId}>
                            {s.opponent ? `vs. ${s.opponent}` : "Practice"} - {new Date(s.date).toLocaleDateString()}
                        </option>
                    ))}
                </select>
            );
        case "opponent": {
            const uniqueOpponents = [...new Set(sessions.map((s) => s.opponent).filter(Boolean))];
            return (
                <select name="opponent" onChange={handleSelect}>
                    <option value="">All Opponents</option>
                    {uniqueOpponents.map((o) => (
                        <option key={o} value={o}>{o}</option>
                    ))}
                </select>
            );
        }
        case "season": {
            const uniqueSeasons = [...new Set(sessions.map((s) => s.season).filter(Boolean))];
            return (
                <select name="season" onChange={handleSelect}>
                    <option value="">All Seasons</option>
                    {uniqueSeasons.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            );
        }
        default:
            return null;
    }
}
