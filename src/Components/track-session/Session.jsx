import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router";
import PlayerDropdown from "./PlayerDropdown";
import EndSessionButton from "./EndSession";

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
                <div className="back-row-grid">
                    <button
                        type="button"
                        name="attackLocation" value="C"
                        className={attackClass("C")}
                        onClick={handleClick}>C</button>
                    <button
                        type="button"
                        name="attackLocation" value="Back Pipe"
                        className={attackClass("Back Pipe")}
                        onClick={handleClick}>Back Pipe</button>
                    <button
                        type="button"
                        name="attackLocation" value="Front Pipe"
                        className={attackClass("Front Pipe")}
                        onClick={handleClick}>Front Pipe</button>
                    <button
                        type="button"
                        name="attackLocation" value="A"
                        className={attackClass("A")}
                        onClick={handleClick}>A</button>
                </div>
                <div className="front-row-grid">
                    <button
                        type="button"
                        name="attackLocation" value="RS"
                        className={attackClass("RS")}
                        onClick={handleClick}>RS</button>
                    <button
                        type="button"
                        name="attackLocation" value="50"
                        className={attackClass("50")}
                        onClick={handleClick}>50</button>
                    <button
                        type="button"
                        name="attackLocation" value="30"
                        className={attackClass("30")}
                        onClick={handleClick}>30</button>
                    <button
                        type="button"
                        name="attackLocation" value="LS"
                        className={attackClass("LS")}
                        onClick={handleClick}>LS</button>
                </div>

                {session?.players.length > 1 && (
                    <PlayerDropdown players={session.players} setNewAction={setNewAction} />
                )}

                <div className="contact-grid">
                    <button
                        type="button"
                        name="contactLocation" value="In Front"
                        className={contactClass("In Front")}
                        onClick={handleClick}>In Front</button>
                    <button
                        type="button"
                        name="contactLocation" value="Left"
                        className={contactClass("Left")}
                        onClick={handleClick}>Left</button>
                    <button
                        type="button"
                        name="contactLocation" value="Direct"
                        className={contactClass("Direct")}
                        onClick={handleClick}>Direct</button>
                    <button
                        type="button"
                        name="contactLocation" value="Right"
                        className={contactClass("Right")}
                        onClick={handleClick}>Right</button>
                    <button
                        type="button"
                        name="contactLocation" value="Above"
                        className={contactClass("Above")}
                        onClick={handleClick}>Above</button>
                </div>

                <div className="dig-quality-grid">
                    <button
                        type="button"
                        name="digQuality" value="0"
                        className={digClass("0")}
                        onClick={handleClick}>Error</button>
                    <button
                        type="button"
                        name="digQuality" value="1"
                        className={digClass("1")}
                        onClick={handleClick}>Good</button>
                    <button
                        type="button"
                        name="digQuality" value="2"
                        className={digClass("2")}
                        onClick={handleClick}>Perfect</button>
                </div>
                <button type="submit">Done</button>
            </form>
        </>
    )
}
