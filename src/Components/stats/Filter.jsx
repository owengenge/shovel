import React from "react";

/** Dropdown that updates filters on selection. Also displays the unique items to filter */
export default function Filter({ setFilters, filters, type, sessions }) {

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
                <select name="playerId" value={filters.playerId} onChange={handleSelect}>
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
                <select name="sessionId" value={filters.sessionId} onChange={handleSelect}>
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
                <select name="opponent" value={filters.opponent} onChange={handleSelect}>
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
                <select name="season" value={filters.season} onChange={handleSelect}>
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
