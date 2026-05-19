import React from "react";

/** Back and front row attack location buttons. */
export default function AttackGrid({ handleClick, attackClass }) {
    return (
        <div className="attack-grid-div">
            <h3>Attack Location</h3>
            <div className="attack-grid">
                <div className="back-row-grid">
                    <button
                        type="button"
                        name="attackLocation" value="C"
                        className={attackClass("C")}
                        onClick={handleClick}>C</button>
                    <button
                        type="button"
                        name="attackLocation" value="Back Pipe"
                        className={attackClass("Back Pipe")}
                        onClick={handleClick}>Back Pipe</button>
                    <button
                        type="button"
                        name="attackLocation" value="Front Pipe"
                        className={attackClass("Front Pipe")}
                        onClick={handleClick}>Front Pipe</button>
                    <button
                        type="button"
                        name="attackLocation" value="A"
                        className={attackClass("A")}
                        onClick={handleClick}>A</button>
                </div>
                <div className="front-row-grid">
                    <button
                        type="button"
                        name="attackLocation" value="RS"
                        className={attackClass("RS")}
                        onClick={handleClick}>RS</button>
                    <button
                        type="button"
                        name="attackLocation" value="50"
                        className={attackClass("50")}
                        onClick={handleClick}>50</button>
                    <button
                        type="button"
                        name="attackLocation" value="30"
                        className={attackClass("30")}
                        onClick={handleClick}>30</button>
                    <button
                        type="button"
                        name="attackLocation" value="LS"
                        className={attackClass("LS")}
                        onClick={handleClick}>LS</button>
                </div>
            </div>
        </div>
    );
}
