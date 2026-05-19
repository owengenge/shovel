import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router";
import EndSessionButton from "./EndSession";
import AttackGrid from "./AttackGrid";
import ContactGrid from "./ContactGrid";
import DigQuality from "./DigQuality";
import PlayerSelect from "./PlayerSelect";

/** Builds and adds a new action to actions */
export default function Session() {
    const { sessionId } = useParams();
    const { sessions, actions, setActions } = useOutletContext();
    const [newAction, setNewAction] = useState({
        player: {},
        attackLocation: "",
        contactLocation: "",
        digQuality: ""
    });

    const [ended, setEnded] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const updated = [...actions, { ...newAction, sessionId, actionId: crypto.randomUUID() }];
        setActions(updated);
        console.log("actions:", updated);
        setNewAction({ player: {}, attackLocation: "", contactLocation: "", digQuality: "" });
    }

    function handleClick(e) {
        const { name, value } = e.target;
        setNewAction((prev) => ({ ...prev, [name]: value }));
    }

    function handleUndo() {
        setActions(actions.slice(0, -1));
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
        if (session?.players.length === 1) {
            setNewAction((prev) => ({ ...prev, player: session.players[0] }));
        }
    }, [sessionId]);

    useEffect(() => {
        if (ended) navigate("/");
    }, [ended]);
    
    return (
        <>
            <div className="session-buttons-div">
                <div>
                    <button id="reset-action-btn" onClick={() => setNewAction({ player: {}, attackLocation: "", contactLocation: "", digQuality: "" })}>Reset</button>
                    <button id="undo-action-btn" onClick={handleUndo}>Undo Action</button>
                </div>
                <EndSessionButton setEnded={setEnded} />
            </div>
            <form className="new-action-form" onSubmit={handleSubmit}>
                <div className="session-grid">
                    <AttackGrid handleClick={handleClick} attackClass={attackClass} />
                    <PlayerSelect session={session} newAction={newAction} setNewAction={setNewAction} />
                    <ContactGrid handleClick={handleClick} contactClass={contactClass} />
                    <DigQuality handleClick={handleClick} digClass={digClass} />
                </div>
                <button type="submit">Done</button>
            </form>
        </>
    )
}
