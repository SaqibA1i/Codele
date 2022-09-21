import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { VBox } from "./styles/VBox";
import Navbar from "./components/Navbar/Navbar";
import Wrappers from "./wrappers";
import CodeSection from "./components/CodeSection";

function App() {
  return (
    <Wrappers>
      <VBox>
        <Navbar />
        <CodeSection data={"System.out.println"} />
      </VBox>
    </Wrappers>
  );
}

export default App;
