import React from "react";

/** Displays a single overall stat (total touches, positive touch %, avg dig quality, or quality distribution). */
export default function StatCard( {type, filteredActions} ) {
    const qualityScore = { error: 0, poor: 1, good: 2, perfect: 3 };
    const posTouches = filteredActions.filter(a => qualityScore[a.digQuality] >= 2).length;

    switch (type) { 
        case "totalTouches":
            return ( 
                <div className="stat-card">
                    <p>Total Touches</p>
                    <h1>{filteredActions.length}</h1>
                    <p>{posTouches} positive touches</p>
                </div>
            );
        case "posTouch":
            const posTouchPercent = filteredActions.length ? ((posTouches / filteredActions.length) * 100).toFixed(1) : 0;
            return (
                <div className="stat-card">
                    <p>Positive Touch %</p>
                    <h1>{posTouchPercent}%</h1>
                    <p>Rated Good or Perfect digs</p>
                </div>
            );
        case "avgDig": {
            const totalDigScore = filteredActions.reduce((sum, a) => sum + qualityScore[a.digQuality], 0);
            const avgDigQuality = filteredActions.length ? (totalDigScore / filteredActions.length).toFixed(2) : 0;
            const digLabel =
                avgDigQuality < 1 ? "Needs Work" :
                avgDigQuality < 2 ? "Below Average" :
                avgDigQuality < 2.5 ? "Average" :
                avgDigQuality < 3 ? "Good" : "Perfect Average";

            return (
                <div className="stat-card">
                    <p>Avg Dig Quality</p>
                    <div className="avg-dig">
                        <h1>{avgDigQuality}</h1>
                        <p>/3</p>
                    </div>
                    <p>{digLabel}</p>
                </div>
            );
        }
        case "distribution": {
            const levels = [
                { key: "error",   label: "Error",   color: "var(--q-error)" },
                { key: "poor",    label: "Ok",      color: "var(--q-poor)" },
                { key: "good",    label: "Good",    color: "var(--q-good)" },
                { key: "perfect", label: "Perfect", color: "var(--q-perfect)" },
            ];
            const counts = { error: 0, poor: 0, good: 0, perfect: 0 };
            filteredActions.forEach((a) => counts[a.digQuality]++);
            const total = filteredActions.length;

            return (
                <div className="stat-card distribution-card">
                    <p className="stat-card-label">Quality Distribution</p>
                    <div className="dist-bar">
                        {levels.map(({ key, color }) => {
                            const pct = total ? Math.round((counts[key] / total) * 100) : 0;
                            if (!pct) return null;
                            return (
                                <div key={key} className="dist-segment" style={{ width: `${pct}%`, background: color }}>
                                    {pct >= 10 && `${pct}%`}
                                </div>
                            );
                        })}
                    </div>
                    <div className="dist-labels">
                        {levels.map(({ key, label, color }) => (
                            <div key={key} className="dist-label-item">
                                <p className="dist-level" style={{ color }}>{label.toUpperCase()}</p>
                                <p className="dist-count">{counts[key]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        default:
            return null;
    }
}