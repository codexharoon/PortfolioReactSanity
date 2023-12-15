import React from "react";
import { Navbar } from "./components";
import "./App.scss";
import Header from "./container/Header/Header";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default App;
