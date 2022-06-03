import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState("0x");
  return (
    <div className="App">
      <header className="App-header">
        <p>{address}</p>
      </header>
    </div>
  );
}

export default App;
