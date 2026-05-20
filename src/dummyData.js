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
    { actionId: "a-001", sessionId: "sid-001", player: players.jake,  attackLocation: "back-left",   contactLocation: "Direct",   digQuality: "perfect" },
    { actionId: "a-002", sessionId: "sid-001", player: players.jake,  attackLocation: "front-right", contactLocation: "Left",     digQuality: "good"    },
    { actionId: "a-003", sessionId: "sid-001", player: players.mia,   attackLocation: "back-right",  contactLocation: "Above",    digQuality: "poor"    },
    { actionId: "a-004", sessionId: "sid-001", player: players.chris, attackLocation: "center",      contactLocation: "Right",    digQuality: "error"   },
    { actionId: "a-005", sessionId: "sid-001", player: players.mia,   attackLocation: "front-left",  contactLocation: "Direct",   digQuality: "perfect" },
    { actionId: "a-006", sessionId: "sid-001", player: players.chris, attackLocation: "back-left",   contactLocation: "In Front", digQuality: "good"    },

    // Session 2 — vs East Pines
    { actionId: "a-007", sessionId: "sid-002", player: players.jake, attackLocation: "front-right", contactLocation: "Left",     digQuality: "good"    },
    { actionId: "a-008", sessionId: "sid-002", player: players.jake, attackLocation: "back-right",  contactLocation: "Above",    digQuality: "error"   },
    { actionId: "a-009", sessionId: "sid-002", player: players.mia,  attackLocation: "center",      contactLocation: "Direct",   digQuality: "good"    },
    { actionId: "a-010", sessionId: "sid-002", player: players.mia,  attackLocation: "back-left",   contactLocation: "Right",    digQuality: "perfect" },
    { actionId: "a-011", sessionId: "sid-002", player: players.jake, attackLocation: "front-left",  contactLocation: "In Front", digQuality: "poor"    },

    // Session 3 — Practice
    { actionId: "a-012", sessionId: "sid-003", player: players.jake,  attackLocation: "center",      contactLocation: "Direct",   digQuality: "perfect" },
    { actionId: "a-013", sessionId: "sid-003", player: players.mia,   attackLocation: "back-right",  contactLocation: "Left",     digQuality: "good"    },
    { actionId: "a-014", sessionId: "sid-003", player: players.chris, attackLocation: "front-left",  contactLocation: "In Front", digQuality: "poor"    },
    { actionId: "a-015", sessionId: "sid-003", player: players.chris, attackLocation: "back-left",   contactLocation: "Above",    digQuality: "error"   },
    { actionId: "a-016", sessionId: "sid-003", player: players.mia,   attackLocation: "front-right", contactLocation: "Right",    digQuality: "perfect" },
];
