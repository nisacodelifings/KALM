import React from "react";
import "./styles.css";

export default function App() {
const [name, setName] = React.useState("Annisa")
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setName('Whoever you')}>
        Update the Title!
      </button>
    </div>
  );
}
