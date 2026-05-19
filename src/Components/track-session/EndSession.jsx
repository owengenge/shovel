import React from "react";

/** If end session button is clicked show a confirmation alert before ending. */
export default function EndSessionButton( {setEnded} ) {
    function handleClick() {
        if (window.confirm("Are you sure you want to end the session?")) {
            setEnded(true);
        }
    }

    return (
        <button id="end-session-btn" onClick={handleClick}>
            End Session
        </button>
    );
}
