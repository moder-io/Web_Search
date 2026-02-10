document.addEventListener('DOMContentLoaded', () => {
  const textSizeSelect = document.getElementById('text-size-select');
  const applySettingsButton = document.getElementById('apply-settings');
  const exitSettingsButton = document.getElementById('exit-settings');
  const toggleSettings = document.getElementById('toggle-settings');
  const settingsContent = document.querySelector('.settings-content');
  const mostrar = document.getElementById('mostrar');
  const widjetTiempo = document.getElementById('weather');

  function applyStyles(selectedTextSize, mostrarWidget) {
    switch (selectedTextSize) {
      case 'small':
        document.body.style.fontSize = '14px';
        break;
      case 'large':
        document.body.style.fontSize = '18px';
        break;
      case 'medium':
      default:
        document.body.style.fontSize = '16px';
        break;
    }

    if (widjetTiempo) {
      widjetTiempo.style.visibility = (mostrarWidget === 'no') ? 'hidden' : 'visible';
    }
  }

  function loadSettings() {
    const savedTextSize = localStorage.getItem('selectedTextSize') || 'medium';
    const savedMostrar = localStorage.getItem('mostrar') || 'si';

    if (textSizeSelect) textSizeSelect.value = savedTextSize;
    if (mostrar) mostrar.value = savedMostrar;

    applyStyles(savedTextSize, savedMostrar);
  }

  function saveSettings() {
    const selectedTextSize = textSizeSelect ? textSizeSelect.value : 'medium';
    const mostrarValue = mostrar ? mostrar.value : 'si';

    localStorage.setItem('selectedTextSize', selectedTextSize);
    localStorage.setItem('mostrar', mostrarValue);

    applyStyles(selectedTextSize, mostrarValue);
  }

  if (applySettingsButton) {
    applySettingsButton.addEventListener('click', (e) => {
      e.preventDefault();
      saveSettings();
    });
  }

  if (exitSettingsButton) {
    exitSettingsButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (settingsContent) settingsContent.style.display = 'none';
    });
  }

  if (toggleSettings) {
    toggleSettings.addEventListener('click', (e) => {
      e.preventDefault();
      if (!settingsContent) return;
      settingsContent.style.display = (settingsContent.style.display === 'block') ? 'none' : 'block';
    });
  }

  function renderLinks() {
    const ul = document.getElementById('enlaces-lista');
    if (!ul) return;
    ul.querySelectorAll('li[data-user-link="1"]').forEach(li => li.remove());

    const enlacesGuardados = JSON.parse(localStorage.getItem('enlaces') || '[]');
    enlacesGuardados.forEach((enlace) => {
      if (!enlace?.url || !enlace?.icono) return;

      const li = document.createElement('li');
      const a = document.createElement('a');
      const img = document.createElement('img');

      li.className = 'enlace-barralateral';
      li.dataset.userLink = '1';

      a.href = enlace.url;
      img.src = enlace.icono;
      img.className = 'ico-barralateral';

      a.appendChild(img);
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  window.agregarEnlace = function agregarEnlace() {
    const nuevoEnlace = document.getElementById('nuevo-enlace')?.value?.trim();
    const nuevoIcono = document.getElementById('nuevo-icono')?.value?.trim();

    if (!nuevoEnlace || !nuevoIcono) return;

    const enlacesGuardados = JSON.parse(localStorage.getItem('enlaces') || '[]');
    enlacesGuardados.push({ url: nuevoEnlace, icono: nuevoIcono });
    localStorage.setItem('enlaces', JSON.stringify(enlacesGuardados));

    document.getElementById('nuevo-enlace').value = '';
    document.getElementById('nuevo-icono').value = '';

    renderLinks();
  };

  window.borrarEnlace = function borrarEnlace() {
    const ul = document.getElementById('enlaces-lista');
    if (ul) ul.querySelectorAll('li[data-user-link="1"]').forEach(li => li.remove());
    localStorage.setItem('enlaces', '[]');
  };

  const contenedorDireccion = document.querySelector('.contenedor-direccion');
  const contenedorBoton = document.querySelector('.contenedor-boton');
  let visible = false;

  if (contenedorBoton && contenedorDireccion) {
    contenedorBoton.addEventListener('click', (e) => {
      e.preventDefault();
      visible = !visible;
      contenedorDireccion.style.visibility = visible ? 'visible' : 'hidden';
    });
  }

  loadSettings();
  renderLinks();
});
