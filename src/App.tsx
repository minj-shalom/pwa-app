import "./App.css";
import { PWALogo } from "@/assets";

function App() {
  return (
    <>
      <div>
        <img src={PWALogo} className="logo" alt="PWA logo" />
      </div>
      <h1>Progressive Web Apps</h1>
      <div className="card">
        <button onClick={() => console.log("onClick")}>
          Push Notification
        </button>
        <p>Click the button to receive push notifications.</p>
      </div>
      <p className="read-the-docs">
        Click on the PWA logo to view the source code.
      </p>
    </>
  );
}

export default App;
