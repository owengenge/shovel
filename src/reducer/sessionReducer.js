export const initialSessionState = {
    sessionName: "",
    events: [],
    currentAttackLocation: null,
    currentContactZone: null,
};

export function sessionReducer(state, action) {
    switch (action.type) {
        case "SET_ATTACK_LOCATION":
            return {
                ...state,
                currentAttackLocation: action.payload,
            };
        case "SET_CONTACT_ZONE":
            return {
                ...state,
                currentContactZone: action.payload,
            };
        case "ADD_EVENT":
            if (!state.currentAttackLocation || !state.currentContactZone) return state;

            const newEvent = {
                attackFrom: state.currentAttackLocation,
                contactZone: state.currentContactZone,
                success: action.payload.success,
                timestamp: Date.now(),
            };

            return {
                ...state,
                events: [...state.events, newEvent],
                currentAttackLocation: null,
                currentContactZone: null,
            };
        case "UNDO_PREV_EVENT": 
            return {
                ...state, 
                events: state.events.slice(0, -1),
            };
        case "RESET_SESSION":
            return {
                ...state,
                events: [],
                currentAttackLocation: null,
                currentContactZone: null,
            };
        default:
            return state;
    }
}   
