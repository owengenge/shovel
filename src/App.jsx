import React, { useState } from "react";
import { Link, Outlet } from "react-router";

/** Root layout. Holds global session state and renders the nav and current route. */
function App() {
  const [sessions, setSessions] = useState([]);

  return (
    <div>
        <header>
            <h1>SHOVEL</h1>
            <nav>
              <Link to="/">Home</Link>
            </nav>
        </header>
      <Outlet context={{ sessions, setSessions }} />
    </div>
  );
}

export default App;
