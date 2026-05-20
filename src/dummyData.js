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
    { actionId: "a-001", sessionId: "sid-001", player: players.jake,  attackLocation: "C",          contactLocation: "Direct",   digQuality: "perfect" },
    { actionId: "a-002", sessionId: "sid-001", player: players.jake,  attackLocation: "LS",         contactLocation: "Left",     digQuality: "good"    },
    { actionId: "a-003", sessionId: "sid-001", player: players.mia,   attackLocation: "Back Pipe",  contactLocation: "Above",    digQuality: "poor"    },
    { actionId: "a-004", sessionId: "sid-001", player: players.chris, attackLocation: "30",         contactLocation: "Right",    digQuality: "error"   },
    { actionId: "a-005", sessionId: "sid-001", player: players.mia,   attackLocation: "RS",         contactLocation: "Direct",   digQuality: "perfect" },
    { actionId: "a-006", sessionId: "sid-001", player: players.chris, attackLocation: "A",          contactLocation: "In Front", digQuality: "good"    },

    // Session 2 — vs East Pines
    { actionId: "a-007", sessionId: "sid-002", player: players.jake, attackLocation: "50",          contactLocation: "Left",     digQuality: "good"    },
    { actionId: "a-008", sessionId: "sid-002", player: players.jake, attackLocation: "Front Pipe",  contactLocation: "Above",    digQuality: "error"   },
    { actionId: "a-009", sessionId: "sid-002", player: players.mia,  attackLocation: "C",           contactLocation: "Direct",   digQuality: "good"    },
    { actionId: "a-010", sessionId: "sid-002", player: players.mia,  attackLocation: "A",           contactLocation: "Right",    digQuality: "perfect" },
    { actionId: "a-011", sessionId: "sid-002", player: players.jake, attackLocation: "30",          contactLocation: "In Front", digQuality: "poor"    },

    // Session 3 — Practice
    { actionId: "a-012", sessionId: "sid-003", player: players.jake,  attackLocation: "C",          contactLocation: "Direct",   digQuality: "perfect" },
    { actionId: "a-013", sessionId: "sid-003", player: players.mia,   attackLocation: "Back Pipe",  contactLocation: "Left",     digQuality: "good"    },
    { actionId: "a-014", sessionId: "sid-003", player: players.chris, attackLocation: "LS",         contactLocation: "In Front", digQuality: "poor"    },
    { actionId: "a-015", sessionId: "sid-003", player: players.chris, attackLocation: "50",         contactLocation: "Above",    digQuality: "error"   },
    { actionId: "a-016", sessionId: "sid-003", player: players.mia,   attackLocation: "RS",         contactLocation: "Right",    digQuality: "perfect" },
];
