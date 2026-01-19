import { useReducer } from "react";
import { sessionReducer, initialSessionState } from "./reducer/sessionReducer";

function App() {
  const [state, dispatch] = useReducer(sessionReducer, initialSessionState);

  return (
    <div>
      <h1>Volleyball Defensive Stat Tracker</h1>

      <div>
        <button onClick={() => dispatch({ type: "SET_ATTACK_LOCATION", payload: "RS" })}>
          Right Side
        </button>
        <button onClick={() => dispatch({ type: "SET_CONTACT_ZONE", payload: "DIRECT" })}>
          Direct
        </button>
        <button onClick={() => dispatch({ type: "ADD_EVENT", payload: { success: true } })}>
          Successful Dig
        </button>
        <button onClick={() => dispatch({ type: "ADD_EVENT", payload: { success: false } })}>
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
