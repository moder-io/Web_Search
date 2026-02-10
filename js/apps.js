document.addEventListener("DOMContentLoaded", () => {
  const agregarAppButton = document.getElementById("agregarApp");
  const appsList = document.getElementById("rectangulo");

  if (!appsList) return;

  const savedApps = JSON.parse(localStorage.getItem("userApps") || "[]");
  savedApps.forEach(app => {
    if (app?.url && app?.imageUrl) agregarApp(app.url, app.imageUrl);
  });

  if (agregarAppButton) {
    agregarAppButton.addEventListener("click", () => {
      const appUrlInput = document.getElementById("app-url");
      const appImageInput = document.getElementById("app-image");

      const url = (appUrlInput?.value || "").trim();
      const imageUrl = (appImageInput?.value || "").trim();

      if (!url || !imageUrl) return;

      agregarApp(url, imageUrl);

      const updated = JSON.parse(localStorage.getItem("userApps") || "[]");
      updated.push({ url, imageUrl });
      localStorage.setItem("userApps", JSON.stringify(updated));

      if (appUrlInput) appUrlInput.value = "";
      if (appImageInput) appImageInput.value = "";
    });
  }

  function agregarApp(url, imageUrl) {
    const nuevaApp = document.createElement("a");
    nuevaApp.href = url;

    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = imageUrl;
    nuevaImagen.className = "ico";

    nuevaApp.appendChild(nuevaImagen);
    appsList.appendChild(nuevaApp);

    nuevaApp.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      const confirmarBorrar = confirm("¿Deseas borrar este enlace?");
      if (!confirmarBorrar) return;

      appsList.removeChild(nuevaApp);

      const current = JSON.parse(localStorage.getItem("userApps") || "[]");
      const index = current.findIndex(app => app.url === url && app.imageUrl === imageUrl);
      if (index !== -1) {
        current.splice(index, 1);
        localStorage.setItem("userApps", JSON.stringify(current));
      }
    });
  }
});
