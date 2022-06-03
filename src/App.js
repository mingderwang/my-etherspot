import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./helpers";

function App() {
  const [address, setAddress] = useState("0x");
  useEffect(() => {
    const promise = fetchData();
    promise.then((data) => {
      setAddress(data.user);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{address}</p>
      </header>
    </div>
  );
}

export default App;
