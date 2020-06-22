import React from "react";
import Movies from "./components/movies";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
