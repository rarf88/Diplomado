function filtrarCategoria(categoria) {
  const imagenes = document.querySelectorAll('#galeria > div');
  imagenes.forEach(img => {
    img.style.display =
      categoria === 'todas' || img.classList.contains(`categoria-${categoria}`)
        ? 'block'
        : 'none';
  });
}

function mostrarDetalle(imagen, descripcion, autor) {
  localStorage.setItem('detalleImagen', JSON.stringify({ imagen, descripcion, autor }));
  window.location.href = 'detalle.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactoForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (nombre && email && mensaje) {
        alert('Formulario enviado correctamente. ¡Gracias por contactarnos!');
        form.reset();
      } else {
        alert('Por favor, completa todos los campos.');
      }
    });
  }
});