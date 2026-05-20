import React from "react";
import ZoneCard from "./ZoneCard";
import AttackZoneCard from "./AttackZoneCard";
import getAttackStats from "../../utils/getAttackStats";

const zones = [
    { location: "C",          abbr: "C",  name: "C",          rowLabel: "Back Row",  col: 1, gridRow: 1 },
    { location: "Back Pipe",  abbr: "BP", name: "Back Pipe",  rowLabel: "Back Row",  col: 2, gridRow: 1 },
    { location: "Front Pipe", abbr: "FP", name: "Front Pipe", rowLabel: "Back Row",  col: 3, gridRow: 1 },
    { location: "A",          abbr: "A",  name: "A",          rowLabel: "Back Row",  col: 4, gridRow: 1 },
    { location: "RS",         abbr: "RS", name: "Right Side", rowLabel: "Front Row", col: 1, gridRow: 2 },
    { location: "50",         abbr: "50", name: "50",         rowLabel: "Front Row", col: 2, gridRow: 2 },
    { location: "30",         abbr: "30", name: "30",         rowLabel: "Front Row", col: 3, gridRow: 2 },
    { location: "LS",         abbr: "LS", name: "Left Side",  rowLabel: "Front Row", col: 4, gridRow: 2 },
];

export default function AttackStats({ barView, filteredActions }) {
    if (barView) {
        const zonesWithStats = zones.map((z) => ({ ...z, ...getAttackStats(filteredActions, z.location) }));
        const sorted = [...zonesWithStats].sort((a, b) => (b.p ?? -1) - (a.p ?? -1));
        return (
            <div className="attack-stats-div">
                <h2>Attack Location</h2>
                <p>Positive touch % by where the attack came from</p>
                <div className="zone-bar-list">
                    {sorted.map(({ location, n, p }) => (
                        <ZoneCard key={location} label={location} n={n} p={p} barView />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="attack-stats-div">
            <h2>Attack Location</h2>
            <p>Positive touch % by where the attack came from</p>
            <div className="attack-stats-grid">
                {zones.map(({ location, abbr, name, rowLabel, col, gridRow }) => (
                    <div key={location} style={{ gridColumn: col, gridRow }}>
                        <AttackZoneCard
                            location={location}
                            abbr={abbr}
                            name={name}
                            rowLabel={rowLabel}
                            actions={filteredActions}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}