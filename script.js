// Datos de la galería con imágenes integradas
const imagenes = [
  {src: 'assets/img/img1.jpg', title: 'Cumbres Doradas', author: 'Ramón', category: 'Paisajes'},
  {src: 'assets/img/img2.jpg', title: 'Lago Esmeralda', author: 'Ramón', category: 'Paisajes'},
  {src: 'assets/img/img3.jpg', title: 'Bosque Nublado', author: 'Ramón', category: 'Paisajes'},
  {src: 'assets/img/img4.jpg', title: 'Atardecer Urbano', author: 'Ramón', category: 'Arquitectura'},
  {src: 'assets/img/img5.jpg', title: 'Sendero Antiguo', author: 'Ramón', category: 'Paisajes'},
  {src: 'assets/img/img6.jpg', title: 'Cascada Secreta', author: 'Ramón', category: 'Paisajes'},
  {src: 'assets/img/img7.jpg', title: 'Puente de Piedra', author: 'Ramón', category: 'Arquitectura'},
  {src: 'assets/img/img8.jpg', title: 'Campo de Lavanda', author: 'Ramón', category: 'Paisajes'},
  {src: 'assets/img/img9.jpg', title: 'Retrato en Silencio', author: 'Ramón', category: 'Retratos'}
];

function crearGaleria(filterCategory='todas'){
  const cont = document.getElementById('galeria');
  cont.innerHTML = '';
  const list = imagenes.filter(img => filterCategory === 'todas' ? true : img.category === filterCategory);
  list.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="card gallery-card fade-in">
        <img src="${item.src}" class="card-img-top" alt="${item.title}" />
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text text-muted">${item.author} · ${item.category}</p>
        </div>
      </div>
    `;
    col.querySelector('.gallery-card').addEventListener('click', ()=> abrirModal(item));
    cont.appendChild(col);
  });
}

function abrirModal(item){
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalAuthor = document.getElementById('modalAuthor');
  modalImg.src = item.src;
  modalTitle.textContent = item.title;
  modalAuthor.textContent = item.author + ' · ' + item.category;
  const modal = new bootstrap.Modal(document.getElementById('detalleModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', ()=>{
  crearGaleria('todas');
  document.querySelectorAll('.btn-group .btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.btn-group .btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      crearGaleria(cat);
    });
  });

  // Formulario
  const form = document.getElementById('contactoForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      const alertBox = document.getElementById('contactAlert');
      alertBox.innerHTML = '';
      if(!nombre || !email || !mensaje){
        alertBox.innerHTML = `<div class="alert alert-danger">Por favor completa todos los campos.</div>`;
        return;
      }
      alertBox.innerHTML = `<div class="alert alert-success">Mensaje enviado. ¡Gracias, ${nombre}!</div>`;
      form.reset();
    });
  }
});