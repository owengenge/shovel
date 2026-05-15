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
            <h1>SHOVEL</h1>
            {!inSession && (
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            )}
        </header>
      <Outlet context={{ sessions, setSessions, actions, setActions }} />
    </div>
  );
}

export default App;
