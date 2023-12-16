import React from "react";
import { Navbar } from "./components";
import "./App.scss";
import Header from "./container/Header/Header";
import About from "./container/About/About";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
      </div>
    </>
  );
}

export default App;
