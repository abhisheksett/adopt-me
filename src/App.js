import React, { useState, lazy, Suspense } from "react";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

// Code splitting
const Details = lazy(() => import("./Details"));

function App() {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          {/* NOTE: Suspense won't work with SSR */}
          {/* <Suspense fallback={<h1>Loading component...</h1>}> */}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
          {/* </Suspense> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

//render(<App />, document.getElementById("root"));

export default App;
