import "./App.css";
import { PWALogo } from "@/assets";

function App() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.ts");
  }

  const handleClick = () => {
    navigator.serviceWorker.ready.then((registration) => {
      registration.pushManager.getSubscription().then((subscription) => {
        if (subscription) {
          // save subscription on DB
        } else {
          registration.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey: "",
            })
            .then((subscription) => {
              // save subscription on DB
            });
        }
      });
    });
  };

  return (
    <>
      <div>
        <img src={PWALogo} className="logo" alt="PWA logo" />
      </div>
      <h1>Progressive Web Apps</h1>
      <div className="card">
        <button onClick={handleClick}>Push Notification</button>
        <p>Click the button to receive push notifications.</p>
      </div>
      <p className="read-the-docs">
        Click on the PWA logo to view the source code.
      </p>
    </>
  );
}

export default App;
