import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import "./App.css";
import { sessions as dummySessions, actions as dummyActions } from "./dummyData";

/** Root layout. Holds global session state and renders the nav and current route. */
function App() {
  const [sessions, setSessions] = useState(dummySessions);
  const [actions, setActions] = useState(dummyActions);
  const location = useLocation();
  const inSession = location.pathname.startsWith("/session");

  return (
    <div>
      <header>
          <h2>SHOVEL</h2>
          <p>Defense, decoded.</p>
          {!inSession && (
              <nav>
                  <Link to="/">Home</Link>
                  <Link to="/stats">Stats</Link>
              </nav>
          )}
      </header>
      <Outlet context={{ sessions, setSessions, actions, setActions }} />
    </div>
  );
}

export default App;
