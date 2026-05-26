import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router";
import EndSessionButton from "./EndSession";
import AttackGrid from "./AttackGrid";
import ContactGrid from "./ContactGrid";
import DigQuality from "./DigQuality";
import PlayerSelect from "./PlayerSelect";
import AddPlayer from "../new-session/AddPlayer";

/** Builds and adds a new action to actions */
export default function Session() {
    const { sessionId } = useParams();
    const { sessions, setSessions, actions, setActions } = useOutletContext();
    const [newAction, setNewAction] = useState({
        player: {},
        attackLocation: "",
        contactLocation: "",
        digQuality: ""
    });
const [ended, setEnded] = useState(false);
    const [editingPlayers, setEditingPlayers] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newEntry = { ...newAction, sessionId, actionId: crypto.randomUUID() };
        fetch("${import.meta.env.VITE_API_URL}/actions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEntry)
        });
        setActions((prev) => [...prev, newEntry]);
        setNewAction({ player: {}, attackLocation: "", contactLocation: "", digQuality: "" });
    }

    function handleClick(e) {
        const { name, value } = e.target;

        setNewAction((prev) => ({ ...prev, [name]: value }));
    }

    function handleReset() {
        setNewAction({ player: {}, attackLocation: "", contactLocation: "", digQuality: "" });
    }

    function handleUndo() {
        const lastAction = actions[actions.length - 1];
        if (!lastAction) return;
        fetch(`${import.meta.env.VITE_API_URL}/actions/${lastAction.actionId}`, {
            method: "DELETE"
        });
        setActions(actions.slice(0, -1));
    }

    function updateSessionPlayers(newPlayers) {
        setSessions(sessions.map((s) =>
            s.sessionId === sessionId ? { ...s, players: newPlayers } : s
        ));
    }

    function handleRemoveSessionPlayer(playerId) {
        updateSessionPlayers(session.players.filter((p) => p.playerId !== playerId));
        if (newAction.player?.playerId === playerId) {
            setNewAction((prev) => ({ ...prev, player: {} }));
        }
    }

    function attackClass(value) {
        return newAction.attackLocation === value ? "selected" : "";
    }

    function contactClass(value) {
        return newAction.contactLocation === value ? "selected" : "";
    }

    function digClass(value) {
        return newAction.digQuality === value ? "selected" : "";
    }

    const session = sessions.find((item) => item.sessionId === sessionId);

    useEffect(() => {
        if (ended) navigate("/");
    }, [ended]);
    
    if (!session) return null;

    return (
        <>
            <div className="session-top-bar">
                <div id="session-info">
                    {session.opponent === '' ? <h2>Practice</h2> : <h2>vs. {session.opponent}</h2>}
                    <div id="digs-logged">
                        <p id="digs-logged-num">{actions.filter((action) => action.sessionId === sessionId).length}</p>
                        <p>digs logged</p>
                    </div>
                </div>
                <div className="session-buttons-div">
                    <button id="reset-action-btn" onClick={handleReset}>Reset Action</button>
                    <button id="undo-action-btn" onClick={handleUndo}>Undo</button>
                    <button type="button" onClick={() => setEditingPlayers((prev) => !prev)}>
                        {editingPlayers ? "Done Editing" : "Edit Players"}
                    </button>
                    <EndSessionButton setEnded={setEnded} />
                </div>
            </div>
            {editingPlayers && (
                <div className="edit-players-panel">
                    {session.players.map((player) => (
                        <div key={player.playerId} className="edit-player-row">
                            <span>{player.name} #{player.number}</span>
                            <button type="button" onClick={() => handleRemoveSessionPlayer(player.playerId)}>-</button>
                        </div>
                    ))}
                    <AddPlayer
                        players={session.players}
                        setPlayers={updateSessionPlayers}
                        sessions={sessions}
                    />
                </div>
            )}
            <form className="new-action-form" onSubmit={handleSubmit}>
                <div className="session-grid">
                    <AttackGrid handleClick={handleClick} attackClass={attackClass} />
                    <PlayerSelect session={session} newAction={newAction} setNewAction={setNewAction} />
                    <ContactGrid handleClick={handleClick} contactClass={contactClass} />
                    <DigQuality handleClick={handleClick} digClass={digClass} />
                </div>
                <button
                    type="submit"
                    disabled={!newAction.attackLocation || !newAction.contactLocation || !newAction.digQuality || !newAction.player?.number}
                >Done</button>
            </form>
        </>
    )
}
