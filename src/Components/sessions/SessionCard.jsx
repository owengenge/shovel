import React from "react";
import { useOutletContext } from "react-router";
import { FiTrash2 } from "react-icons/fi";

/** Display a card representing a single session. Including a button to remove it.
 *  Display: Session name, date, season
 *  Hide delete button for active session
*/
export default function SessionCard({ s }) {
    const { setSessions, setActions, activeSessionId } = useOutletContext();
    
    function handleDelete(sessionId) {
        if (!window.confirm("Are you sure you want to delete this session?")) return;
        setSessions((prev) => prev.filter((s) => s.sessionId !== sessionId));
        setActions((prev) => prev.filter((a) => a.sessionId !== sessionId));
        fetch(`${import.meta.env.VITE_API_URL}/sessions/${sessionId}`, {
            method: "DELETE"
        });
    }

    return  (
        <div className="session-card">
            <div className="session-card-title">
                <h2>{s.opponent ? `vs. ${s.opponent}` : "Practice"}</h2>
                <p>{new Date(s.date).toLocaleDateString()}</p>
            </div>
            <p>{s.season} season</p>
            {s.sessionId !== activeSessionId ? (
                <button onClick={() => handleDelete(s.sessionId)}><FiTrash2 /></button>
            ):(
                <p>Active</p>
            )}
        </div>
    );
    
}