import React from "react";

/** Dig quality rating buttons: 0 (Error), 1 (Poor), 2 (Good), 3 (Perfect). */
export default function DigQuality({ handleClick, digClass }) {
    return (
        <div className="dig-quality-div">
            <h3>Dig Quality</h3>
            <div className="dig-quality-grid">
                <button
                    type="button"
                    name="digQuality" value="0"
                    className={digClass("0")}
                    onClick={handleClick}>Error</button>
                <button
                    type="button"
                    name="digQuality" value="1"
                    className={digClass("1")}
                    onClick={handleClick}>Poor</button>
                <button
                    type="button"
                    name="digQuality" value="2"
                    className={digClass("2")}
                    onClick={handleClick}>Good</button>
                <button
                    type="button"
                    name="digQuality" value="3"
                    className={digClass("3")}
                    onClick={handleClick}>Perfect</button>
            </div>
        </div>
    );
}
