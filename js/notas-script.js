const textarea = document.getElementById('mensaje');
const notasContainer = document.getElementById('notas-recipiente');
const descargarBtn = document.getElementById('descargar-btn');

const savedNotes = JSON.parse(localStorage.getItem('notas-list') || '[]');

function cargarNotas() {
  if (!notasContainer) return;

  notasContainer.innerHTML = '';
  savedNotes.forEach((nota, index) => {
    const notaDiv = document.createElement('div');
    notaDiv.classList.add('nota');
    notaDiv.innerHTML = `<strong>Fecha:</strong> ${nota.fecha}<br><strong>Notas:</strong> ${nota.contenido}`;
    notasContainer.appendChild(notaDiv);

    if (index < savedNotes.length - 1) {
      notasContainer.appendChild(document.createElement('hr'));
    }
  });
}

if (descargarBtn && textarea) {
  descargarBtn.addEventListener('click', () => {
    const texto = textarea.value.trim();
    if (!texto) return;

    const fecha = new Date().toLocaleDateString();

    const contenido = `Fecha:${fecha}\n\nNotas:\n\n${texto}`;
    const blob = new Blob([contenido], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'notas/recordatorios.txt';
    a.click();

    savedNotes.unshift({ fecha, contenido: texto + "\n" });
    if (savedNotes.length > 10) savedNotes.pop();
    localStorage.setItem('notas-list', JSON.stringify(savedNotes));

    textarea.value = '';
    cargarNotas();
  });
}

cargarNotas();
