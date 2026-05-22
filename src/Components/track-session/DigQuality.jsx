import React from "react";

/** Dig quality rating buttons: 0 (Error), 1 (Poor), 2 (Good), 3 (Perfect). */
export default function DigQuality({ handleClick, digClass }) {
    return (
        <div className="dig-quality-div">
            <h3>Dig Quality</h3>
            <div className="dig-quality-grid">
                <button
                    type="button"
                    name="digQuality" value="error"
                    className={digClass("error")}
                    onClick={handleClick}>Error</button>
                <button
                    type="button"
                    name="digQuality" value="poor"
                    className={digClass("poor")}
                    onClick={handleClick}>Ok</button>
                <button
                    type="button"
                    name="digQuality" value="good"
                    className={digClass("good")}
                    onClick={handleClick}>Good</button>
                <button
                    type="button"
                    name="digQuality" value="perfect"
                    className={digClass("perfect")}
                    onClick={handleClick}>Perfect</button>
            </div>
        </div>
    );
}
