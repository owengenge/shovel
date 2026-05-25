import React, { useState } from "react";
import { Link, useOutletContext } from "react-router";
import SessionForm from "./new-session/SessionForm";

/** Home screen. Shows the session list and toggles the create session form. */
export default function Home() {
    const { sessions, setSessions, sessionActive, setSessionActive, activeSessionId, setActiveSessionId } = useOutletContext();
    const [players, setPlayers] = useState([]); // For tracking multiple players/adding a new player.
    const [addBtnClicked, setAddBtnClicked] = useState(false);

    return (
        <div className="home-page">
            <h1>Know your defense.</h1>
            <p>In depth defensive stat tracking. Tap to log attack origin, contact location, and dig quality - court-side, in real time.</p>
            <div className="new-session-div">
                {sessionActive ? (
                    <div className="add-session-grid">
                        <p>Session In Progress</p>
                        <h2>Currently Tracking</h2>
                        <Link to={`/session/${activeSessionId}`} id="resume-session-btn">→</Link>
                    </div>
                ) : !addBtnClicked ? (
                    <div className="add-session-grid">
                        <p>New Session</p>
                        <h2>Start Tracking</h2>
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
                            onCancel={() => setAddBtnClicked(false)}
                            setSessionActive={setSessionActive}
                            setActiveSessionId={setActiveSessionId}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}