import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import "./App.css";
import { sessions as dummySessions, actions as dummyActions } from "./dummyData";

/** Root layout. Holds global session state and renders the nav and current route. */
function App() {
  const [sessions, setSessions] = useState(dummySessions);
  const [actions, setActions] = useState(dummyActions);
  const [sessionActive, setSessionActive] = useState(false);
  const [activeSessionId, setActiveSessionId] = useState(null);

  return (
    <div>
      <header>
          <h2>SHOVEL</h2>
          <p>Uncover the truth behind every dig.</p>
          <nav>
              <Link to="/">Home</Link>
              {sessionActive && <Link to={`/session/${activeSessionId}`}>Session</Link>}
              <Link to="/stats">Stats</Link>
          </nav>
      </header>
      <main>
        <Outlet context={{ sessions, setSessions, actions, setActions, sessionActive, setSessionActive, activeSessionId, setActiveSessionId }} />
      </main>
      <footer>
        <hr></hr>
        <p>v0.1 · Indoor 6s</p>
        <p>Built by Owen Genge</p>
      </footer>
    </div>
  );
}

export default App;
