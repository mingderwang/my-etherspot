import "./App.css";
import { useEffect, useState } from "react";
import { startSdk } from "./helpers";
function App() {
  const [address, setAddress] = useState("0x");

  useEffect(() => {
    startSdk().then((sdk) => {
      if (sdk) {
        sdk.getAccount().then((account) => {
          setAddress(account.address);
        });
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
