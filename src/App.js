import "./App.css";
import { useEffect, useState } from "react";
import { startSdk } from "./helpers";
function App() {
  const [address, setAddress] = useState("testnets only");

  useEffect(() => {
    startSdk().then((sdk) => {
      try {
        sdk
          .getAccount()
          .then((account) => {
            setAddress(account.address);
          })
          .catch(console.log);
      } catch (error) {
        console.error(error);
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
