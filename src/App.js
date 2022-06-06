import "./App.css";
import { useEffect, useState } from "react";
import { startSdk } from "./helpers";
function App() {
  const [address, setAddress] = useState("0x");

  useEffect(() => {
    startSdk().then((sdk) => {
      if (sdk) {
        const { state } = sdk;
        setAddress(state.state$._value.wallet.address);
      }
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
