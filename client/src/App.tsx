import "./App.css";
import { PWALightLogo } from "./assets";
import { useSubscribe } from "./subscribe";

function App() {
  const { mutate } = useSubscribe();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.ts");
  }

  const handleClick = () => {
    navigator.serviceWorker.ready.then((registration) => {
      registration.pushManager.getSubscription().then((subscription) => {
        if (subscription) {
          mutate({
            endpoint: subscription.endpoint,
            p256dh: JSON.parse(JSON.stringify(subscription)).keys.p256dh,
            auth: JSON.parse(JSON.stringify(subscription)).keys.auth,
          });
        } else {
          registration.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey:
                "BKs77j4GvBobTHxZJqbN55eXoCF6wJNnN9_C-r4-WO7bM9RXwct9c8XmYKdMGBp9poI7oY7JcgBDseX7_3Dy50k",
            })
            .then((subscription) => {
              mutate({
                endpoint: subscription.endpoint,
                p256dh: JSON.parse(JSON.stringify(subscription)).keys.p256dh,
                auth: JSON.parse(JSON.stringify(subscription)).keys.auth,
              });
            });
        }
      });
    });
  };

  return (
    <>
      <a
        href={import.meta.env.VITE_LOGO_URL}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={PWALightLogo} className="logo" alt="PWA logo" />
      </a>
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
