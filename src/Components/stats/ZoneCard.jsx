import React from "react";
import getContactStats from "../../utils/getContactStats";

export default function ZoneCard({ contactLocation, actions, barView }) {
    const { n, p } = getContactStats(actions, contactLocation);
    const display = p !== null ? `${p}%` : "—";

    if (barView) {
        return (
            <div className="zone-bar">
                <span className="zone-bar-label">{contactLocation}</span>
                <div className="zone-bar-track">
                    <div className="zone-bar-fill" style={{ width: p !== null ? `${p}%` : "0%" }} />
                </div>
                <span className="zone-bar-pct">{display}</span>
                <span className="zone-bar-n">n={n}</span>
            </div>
        );
    }

    return (
        <div className="zone-card">
            <p className="zone-card-label">{contactLocation}</p>
            <h2 className="zone-card-pct">{display}</h2>
            <div className="zone-card-track">
                <div className="zone-card-fill" style={{ width: p !== null ? `${p}%` : "0%" }} />
            </div>
            <p className="zone-card-n">n = {n}</p>
        </div>
    );
}