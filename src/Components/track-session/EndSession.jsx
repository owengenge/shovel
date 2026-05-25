import React from "react";
import { useOutletContext } from "react-router";

/** If end session button is clicked show a confirmation alert before ending. */
export default function EndSessionButton( {setEnded} ) {
    const { setSessionActive, setActiveSessionId } = useOutletContext();

    function handleClick() {
        if (window.confirm("Are you sure you want to end the session?")) {
            setSessionActive(false);
            setActiveSessionId(null);
            setEnded(true);
        }
    }

    return (
        <button id="end-session-btn" onClick={handleClick}>
            End Session
        </button>
    );
}
