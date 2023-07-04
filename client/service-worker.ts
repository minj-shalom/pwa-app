self.addEventListener("push", (event: any) => {
  const { title, body } = event.data.json();
  console.log("!!!", title, body);

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      vibrate: [200, 100, 200, 100],
    })
  );
});
