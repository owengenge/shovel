import React from "react";

export default function ClearFilters ({ setFilters }) {
    function handleClick() {
        setFilters({
            playerId: "",
            sessionId: "",
            opponent: "",
            season: ""
        });
    }
    return (
        <button 
            className="clear-filter-button"
            onClick={handleClick}>Clear filters</button>
    )
}