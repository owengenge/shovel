const players = {
    jake:  { name: "Jake Smith",  number: "7",  playerId: "pid-001" },
    mia:   { name: "Mia Torres",  number: "12", playerId: "pid-002" },
    chris: { name: "Chris Lee",   number: "3",  playerId: "pid-003" },
};

export const sessions = [
    {
        sessionId: "sid-001",
        opponent: "River Hawks",
        date: new Date("2025-01-10"),
        season: "24-25",
        players: [players.jake, players.mia, players.chris],
    },
    {
        sessionId: "sid-002",
        opponent: "East Pines",
        date: new Date("2025-02-14"),
        season: "24-25",
        players: [players.jake, players.mia],
    },
    {
        sessionId: "sid-003",
        opponent: null,
        date: new Date("2025-03-01"),
        season: "24-25",
        players: [players.jake, players.mia, players.chris],
    },
];

export const actions = [
    // Session 1 — vs River Hawks
    { actionId: "a-001", sessionId: "sid-001", player: players.jake,  attackLocation: "back-left",   contactLocation: "center",     digQuality: "perfect" },
    { actionId: "a-002", sessionId: "sid-001", player: players.jake,  attackLocation: "front-right", contactLocation: "front-left", digQuality: "good"    },
    { actionId: "a-003", sessionId: "sid-001", player: players.mia,   attackLocation: "back-right",  contactLocation: "back-left",  digQuality: "poor"    },
    { actionId: "a-004", sessionId: "sid-001", player: players.chris, attackLocation: "center",      contactLocation: "center",     digQuality: "error"   },
    { actionId: "a-005", sessionId: "sid-001", player: players.mia,   attackLocation: "front-left",  contactLocation: "center",     digQuality: "perfect" },
    { actionId: "a-006", sessionId: "sid-001", player: players.chris, attackLocation: "back-left",   contactLocation: "back-right", digQuality: "good"    },

    // Session 2 — vs East Pines
    { actionId: "a-007", sessionId: "sid-002", player: players.jake, attackLocation: "front-right", contactLocation: "center",      digQuality: "good"    },
    { actionId: "a-008", sessionId: "sid-002", player: players.jake, attackLocation: "back-right",  contactLocation: "back-right",  digQuality: "error"   },
    { actionId: "a-009", sessionId: "sid-002", player: players.mia,  attackLocation: "center",      contactLocation: "front-right", digQuality: "good"    },
    { actionId: "a-010", sessionId: "sid-002", player: players.mia,  attackLocation: "back-left",   contactLocation: "center",      digQuality: "perfect" },
    { actionId: "a-011", sessionId: "sid-002", player: players.jake, attackLocation: "front-left",  contactLocation: "front-left",  digQuality: "poor"    },

    // Session 3 — Practice
    { actionId: "a-012", sessionId: "sid-003", player: players.jake,  attackLocation: "center",      contactLocation: "center",     digQuality: "perfect" },
    { actionId: "a-013", sessionId: "sid-003", player: players.mia,   attackLocation: "back-right",  contactLocation: "back-left",  digQuality: "good"    },
    { actionId: "a-014", sessionId: "sid-003", player: players.chris, attackLocation: "front-left",  contactLocation: "front-right",digQuality: "poor"    },
    { actionId: "a-015", sessionId: "sid-003", player: players.chris, attackLocation: "back-left",   contactLocation: "center",     digQuality: "error"   },
    { actionId: "a-016", sessionId: "sid-003", player: players.mia,   attackLocation: "front-right", contactLocation: "back-right", digQuality: "perfect" },
];
