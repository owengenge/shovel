import React from "react";
import ZoneCard from "./ZoneCard";
import getContactStats from "../../utils/getContactStats";

const zones = [
    { location: "Above", col: 2, row: 1 },
    { location: "Left", col: 1, row: 2 },
    { location: "Direct", col: 2, row: 2 },
    { location: "Right", col: 3, row: 2 },
    { location: "In Front", col: 2, row: 3 },
];

export default function ContactStats({ barView, filteredActions }) {
    const zonesWithStats = zones.map((z) => ({ ...z, ...getContactStats(filteredActions, z.location) }));

    if (barView) {
        const sorted = [...zonesWithStats].sort((a, b) => (b.p ?? -1) - (a.p ?? -1));
        return (
            <div className="contact-stats-div">
                <h2>Contact Location</h2>
                <p>Positive touch % by where the ball was contacted</p>
                <div className="zone-bar-list">
                    {sorted.map(({ location, n, p }) => (
                        <ZoneCard key={location} label={location} n={n} p={p} barView />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="contact-stats-div">
            <h2>Contact Location</h2>
            <p>Positive touch % by where the ball was contacted</p>
            <div className="contact-stats-grid">
                {zonesWithStats.map(({ location, col, row, n, p }) => (
                    <div key={location} style={{ gridColumn: col, gridRow: row }}>
                        <ZoneCard label={location} n={n} p={p} barView={false} />
                    </div>
                ))}
            </div>
        </div>
    );
}