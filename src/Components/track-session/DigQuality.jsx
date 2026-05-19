import React from "react";

/** Dig quality rating buttons: 0 (Error), 1 (Good), 2 (Perfect). */
export default function DigQuality({ handleClick, digClass }) {
    return (
        <div className="dig-quality-grid">
            <h3>Dig Quality</h3>
            <button
                type="button"
                name="digQuality" value="0"
                className={digClass("0")}
                onClick={handleClick}>Error</button>
            <button
                type="button"
                name="digQuality" value="1"
                className={digClass("1")}
                onClick={handleClick}>Good</button>
            <button
                type="button"
                name="digQuality" value="2"
                className={digClass("2")}
                onClick={handleClick}>Perfect</button>
        </div>
    );
}
