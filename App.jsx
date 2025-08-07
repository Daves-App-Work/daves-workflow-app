
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>DAVE'S WORKFLOW APP</h1>
      <p>Willkommen! Bitte wähle im Menü eine Funktion aus.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
