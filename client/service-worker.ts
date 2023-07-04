self.addEventListener("push", (event: any) => {
  const title = event.data.text();

  event.waitUntil(self.registration.showNotification(title));
});
