import React from "react";
import { useOutletContext } from "react-router";
import SessionCard from "./SessionCard";

/** Display all sessions in newest first order */
export default function ManageSessions() {
    const { sessions } = useOutletContext();

    return (
        <>
            <h1>Manage Sessions</h1>
            {sessions.length > 0 ? (
                <div className="sessions-div">
                    {[...sessions].reverse().map((s) =>
                        <SessionCard key={s.sessionId} s={s} />
                    )}
                </div>
            ) : (
                <p id="no-sessions-msg">No sessions created</p>
            )}
        </>
    );
}