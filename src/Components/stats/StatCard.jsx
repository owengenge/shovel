import React from "react";

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
            const posTouchPercent = ((posTouches / filteredActions.length) * 100).toFixed(1);
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
                    <h1>{avgDigQuality} /3</h1>
                    <p>{digLabel}</p>
                </div>
            );
        }
        default:
            return null;
    }
}