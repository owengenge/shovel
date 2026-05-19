import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import "./App.css";

/** Root layout. Holds global session state and renders the nav and current route. */
function App() {
  const [sessions, setSessions] = useState([]);
  const [actions, setActions] = useState([]);
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
              </nav>
          )}
      </header>
      <h1>Know your defense.</h1>
      <p>In depth defensive stat tracking. Tap to log attack origin, contact location, and dig quality — court-side, in real time, with no setup.</p>
      <Outlet context={{ sessions, setSessions, actions, setActions }} />
    </div>
  );
}

export default App;
