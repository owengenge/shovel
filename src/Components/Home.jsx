import React, { useState } from "react";
import { useOutletContext } from "react-router";
import SessionForm from "./session/SessionForm";

/** Home screen. Shows the session list and toggles the create session form. */
export default function Home() {
    const { sessions, setSessions } = useOutletContext();
    const [players, setPlayers] = useState([]); // For tracking multiple players/adding a new player.
    const [addBtnClicked, setAddBtnClicked] = useState(false);

    return (
        <>
            {!(addBtnClicked) ? (
                <button
                    id="add-session-btn"
                    onClick={() => setAddBtnClicked(true)}
                >+</button>
            ) : (
                <div id="create-session-div">
                    <h2>Create New Session</h2>
                    <SessionForm 
                        sessions={sessions}
                        setSessions={setSessions}
                        players={players} 
                        setPlayers={setPlayers}
                        setSeshAddBtnClicked={setAddBtnClicked}
                    />
                    <button onClick={() => setAddBtnClicked(false)}>Cancel</button>
                </div>
            )}
        </>
    )
}