import { useReducer } from "react";
import { sessionReducer, initialSessionState } from "./reducer/sessionReducer";

function App() {
  const [state, dispatch] = useReducer(sessionReducer, initialSessionState);
  const canSave = state.currentAttackLocation && state.currentContactZone;
  
  const ATTACK_LOCATIONS = [
    { label: "RS", row: "FR" },
    { label: "50", row: "FR" },
    { label: "30", row: "FR" },
    { label: "LS", row: "FR" },
    { label: "C", row: "BR" },
    { label: "PIPE", row: "BR" },
  ];
  

  return (
    <div>
      <h1>SHOVEL</h1>
      <p>Volleyball Defensive Stat Tracker</p>

      <div>
        <h3>Back Row</h3>
        {ATTACK_LOCATIONS
          .filter(loc => loc.row === "BR")
          .map(loc => (
            <button
              key={loc.label}
              onClick={() =>
                dispatch({ type: "SET_ATTACK_LOCATION", payload: loc.label })
              }
            >
              {loc.label}
            </button>
        ))}
      </div>

      <div>
        <h3> Front Row </h3>
        {ATTACK_LOCATIONS.filter(loc => loc.row === "FR").map(loc => (
          <button
            key={loc.label}
            onClick={() => 
              dispatch({ type: "SET_ATTACK_LOCATION", payload: loc.label})
            }
          >
            {loc.label}
          </button>
        ))}
      </div>

      <div>
        <button onClick={() => dispatch({ type: "SET_CONTACT_ZONE", payload: "Test Contact Zone" })}>
          Contact Zone
        </button>
        
        <button
          disabled={!canSave}
          onClick={() => dispatch({ type: "ADD_EVENT", payload: { success: true } })}
        >
          Successful Dig
        </button>
        <button
          disabled={!canSave}
          onClick={() => dispatch({ type: "ADD_EVENT", payload: { success: false } })}
        >
          Unsuccessful Dig
        </button>
        <button onClick={() => dispatch({ type: "UNDO_PREV_EVENT" })}>
          Undo
        </button>
        <button
          onClick={() => {
            if (confirm("Reset this session? This will clear all events.")) {
              dispatch({ type: "RESET_SESSION" });
            }
          }}
        >
          Reset
        </button>
      </div>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
