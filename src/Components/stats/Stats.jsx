import React, { useState } from "react";
import { useOutletContext } from "react-router";
import Filter from "./Filter";
import StatCard from "./StatCard";
import ClearFilters from "./ClearFilters";
import ContactStats from "./ContactStats";
import AttackStats from "./AttackStats";

/** Stats page. Holds filter state, computes filteredActions, and renders all stat sections. */
export default function Stats() {
    const { sessions, actions } = useOutletContext();

    const [filters, setFilters] = useState({
        playerId: "",
        sessionId: "",
        opponent: "",
        season: ""
    });
    const [barView, SetBarView] = useState(true);

    // Apply filters 
    const filteredActions = actions.filter((a) => {
        if (filters.sessionId && a.sessionId !== filters.sessionId) return false;
        if (filters.playerId && a.player?.playerId !== filters.playerId) return false;
        if (filters.opponent || filters.season) {
            const session = sessions.find((s) => s.sessionId === a.sessionId);
            if (filters.opponent && session?.opponent !== filters.opponent) return false;
            if (filters.season && session?.season !== filters.season) return false;
        }
        return true;
    });

    return (
        <div>
            <h1>Stats</h1>
            <div className="filters-div">
                <Filter type="player" sessions={sessions} setFilters={setFilters} filters={filters} />
                <Filter type="session" sessions={sessions} setFilters={setFilters} filters={filters} />
                <Filter type="opponent" sessions={sessions} setFilters={setFilters} filters={filters} />
                <Filter type="season" sessions={sessions} setFilters={setFilters} filters={filters} />
                <ClearFilters setFilters={setFilters} />
            </div>
            <hr></hr>
            <div className="overall-stats-div">
                <StatCard type="totalTouches" filteredActions={filteredActions} />
                <StatCard type="posTouch" filteredActions={filteredActions} />
                <StatCard type="avgDig" filteredActions={filteredActions} />
                <StatCard type="distribution" filteredActions={filteredActions} />
            </div>
            <hr></hr>
            <button 
                className="toggle-view" 
                onClick={() => SetBarView((prev) => !prev)}>Toggle View</button>
            <ContactStats barView={barView} filteredActions={filteredActions} />
            <hr></hr>
            <AttackStats barView={barView} filteredActions={filteredActions} />
        </div>
    );
}
