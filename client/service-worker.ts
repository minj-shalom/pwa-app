/// <reference lib="webworker" />
// export default null;
declare let self: ServiceWorkerGlobalScope;

self.addEventListener("push", (event: any) => {
  const { title, body } = event.data.json();

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      vibrate: [200, 100, 200, 100],
    })
  );
});
