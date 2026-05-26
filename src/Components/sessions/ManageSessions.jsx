import React from "react";
import { useOutletContext } from "react-router";
import SessionCard from "./SessionCard";

/** Display all sessions in newest first order */
export default function ManageSessions({  }) {
    const { sessions } = useOutletContext();

    return (
        <>
            <h1>Manage Sessions</h1>
            <div className="sessions-div">
                {[...sessions].slice().reverse().map((s) => 
                    <SessionCard s={s}/>
                )}
            </div>
        </>
    )
}