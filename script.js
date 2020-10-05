// service worker registration

if ("serviceWorker" in navigator) {
  // console.log('Supported service worker');
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        console.log("Service worker: registered");
      })
      .catch((err) => console.error(err));
  });
}
