import React from "react";
import ZoneCard from "./ZoneCard";

const zones = [
    { location: "Above", col: 2, row: 1 },
    { location: "Left", col: 1, row: 2 },
    { location: "Direct", col: 2, row: 2 },
    { location: "Right", col: 3, row: 2 },
    { location: "In Front", col: 2, row: 3 },
];

export default function ContactStats({ barView, filteredActions }) {
    if (barView) {
        const sorted = [...zones].sort((a, b) => {
            const pa = filteredActions.filter(x => x.contactLocation === a.location && [2,3].includes({error:0,poor:1,good:2,perfect:3}[x.digQuality])).length;
            const pb = filteredActions.filter(x => x.contactLocation === b.location && [2,3].includes({error:0,poor:1,good:2,perfect:3}[x.digQuality])).length;
            return pb - pa;
        });
        return (
            <div className="contact-stats-div">
                <h2>Contact Location</h2>
                <p>Positive touch % by where the ball was contacted</p>
                <div className="zone-bar-list">
                    {sorted.map(({ location }) => (
                        <ZoneCard key={location} contactLocation={location} actions={filteredActions} barView />
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
                {zones.map(({ location, col, row }) => (
                    <div key={location} style={{ gridColumn: col, gridRow: row }}>
                        <ZoneCard contactLocation={location} actions={filteredActions} barView={false} />
                    </div>
                ))}
            </div>
        </div>
    );
}