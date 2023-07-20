import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Chile from "./components/PQConChile";
import Footer from "./components/Footer";
import LayoutHome from "./layout/LayoutHome";
import Equipo from "./components/Equipo";

function App() {
  return (
    <>
      <LayoutHome>
        <Header />
        <About />
        <Chile />
        <Equipo />
      </LayoutHome>
    </>
  );
}

export default App;
