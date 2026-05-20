import React from "react";
import getAttackStats from "../../utils/getAttackStats";
import getContactStats from "../../utils/getContactStats";

const contactZones = [
    { location: "Above",    col: 2, row: 1 },
    { location: "Left",     col: 1, row: 2 },
    { location: "Direct",   col: 2, row: 2 },
    { location: "Right",    col: 3, row: 2 },
    { location: "In Front", col: 2, row: 3 },
];

export default function AttackZoneCard({ location, abbr, name, rowLabel, actions }) {
    const { n, p } = getAttackStats(actions, location);
    const display = p !== null ? `${p}%` : "—";
    const zoneActions = actions.filter((a) => a.attackLocation === location);

    return (
        <div className="attack-zone-card">
            <div className="attack-zone-header">
                <div className="attack-zone-icon">{abbr}</div>
                <div className="attack-zone-meta">
                    <span className="attack-zone-name">{name}</span>
                    <span className="attack-zone-row-label">{rowLabel}</span>
                </div>
                <div className="attack-zone-pct-block">
                    <span className="attack-zone-pct">{display}</span>
                    <span className="attack-zone-n">n = {n}</span>
                </div>
            </div>
            <div className="attack-zone-bar-track">
                <div className="attack-zone-bar-fill" style={{ width: p !== null ? `${p}%` : "0%" }} />
            </div>
            <div className="attack-contact-grid">
                {contactZones.map(({ location: cloc, col, row }) => {
                    const { n: cn, p: cp } = getContactStats(zoneActions, cloc);
                    return (
                        <div
                            key={cloc}
                            className={`attack-contact-cell${cn > 0 ? " has-data" : ""}`}
                            style={{ gridColumn: col, gridRow: row }}
                        >
                            <span className="attack-contact-label">{cloc.toUpperCase()}</span>
                            <span className="attack-contact-pct">{cp !== null ? `${cp}%` : "—"}</span>
                            <span className="attack-contact-n">n={cn}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
