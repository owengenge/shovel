import React from "react";

/** Displays positive % and attempt count for a single zone. Renders as a card or a bar row depending on barView. */
export default function ZoneCard({ label, n, p, barView }) {
    const display = p !== null ? `${p}%` : "—";

    if (barView) {
        return (
            <div className="zone-bar">
                <span className="zone-bar-label">{label}</span>
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
            <p className="zone-card-label">{label}</p>
            <h2 className="zone-card-pct">{display}</h2>
            <div className="zone-card-track">
                <div className="zone-card-fill" style={{ width: p !== null ? `${p}%` : "0%" }} />
            </div>
            <p className="zone-card-n">n = {n}</p>
        </div>
    );
}