import React, { useState } from "react";
import { useOutletContext } from "react-router";
import SessionForm from "./new-session/SessionForm";

/** Home screen. Shows the session list and toggles the create session form. */
export default function Home() {
    const { sessions, setSessions } = useOutletContext();
    const [players, setPlayers] = useState([]); // For tracking multiple players/adding a new player.
    const [addBtnClicked, setAddBtnClicked] = useState(false);

    return (
        <div>
            <h1>Know your defense.</h1>
            <p>In depth defensive stat tracking. Tap to log attack origin, contact location, and dig quality - court-side, in real time, with no setup.</p>
            <div className="new-session-div">
                {!(addBtnClicked) ? (
                    <div className="add-session-grid">
                        <p>Start Tracking</p>
                        <h2>New Session</h2>
                        <p>One to multiple players</p>
                        <button
                            id="add-session-btn"
                            onClick={() => setAddBtnClicked(true)}>+</button>
                    </div>
            
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
            </div>
        </div>
    )
}