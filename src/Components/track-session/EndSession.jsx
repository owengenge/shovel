import React from "react";
import { useState } from "react";

/** If end session button is clicked display "Are your sure?" with yes or cancel */
export default function EndSessionButton( {setEnded} ) {
    const [endBtnClicked, setEndBtnClicked] = useState(false);

    return (
        <>
            {!endBtnClicked ? (
                <button id="end-session-btn" onClick={() => setEndBtnClicked(true)}>
                    End Session
                </button>
            ) : (
                <div id="end-session-confirm">
                    <p>Are you sure?</p>
                    <button onClick={() => setEnded(true)}>Yes</button>
                    <button onClick={() => setEndBtnClicked(false)}>Cancel</button>
                </div>
            )}
        </>
    )
}