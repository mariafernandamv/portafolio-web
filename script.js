document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const basePath = path.includes("/paginas/") ? "../" : "./";

  /* =========================
     NAVBAR 
  ========================= */
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <h1>TechInfo</h1>
    <nav class="nav">
      <a class="nav-link" href="${basePath}index.html">Inicio</a>
      <a class="nav-link" href="${basePath}paginas/hadware.html">Hardware</a>
      <a class="nav-link" href="${basePath}paginas/software.html">Software</a>
      <a class="nav-link" href="${basePath}paginas/avances.html">Avances</a>
      <a class="nav-link" href="${basePath}paginas/estudiantes.html">Estudiantes</a>
      <a class="nav-link" href="${basePath}paginas/nosotros.html">Nosotros</a>
      <a class="nav-link" href="${basePath}paginas/conocenos.html">Contacto</a>
      <a class="nav-link" href="${basePath}paginas/producto.html">Producto</a>
    </nav>

    <button id="toggleDark">Modo oscuro</button>
  `;

  document.body.prepend(header);

  /* =========================
     FOOTER 
  ========================= */
  const footer = document.createElement("footer");
  footer.className = "footer";

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-section">
        <h3>TechInfo</h3>
        <p>Aprende informática fácil y rápido con nosotros.</p>
      </div>

      <div class="footer-section">
        <h4>Contáctanos</h4>
        <p><a href="mailto:techinfosoportcr@gmail.com">techinfosoportcr@gmail.com</a></p>
        <p>Teléfono: 2156-6987</p>
        <p><a href="https://wa.me/50687596541" target="_blank">WhatsApp</a></p>
      </div>

      <div class="footer-section">
        <h4>YouTube</h4>
        <a href="https://youtube.com" target="_blank">@TechInfoES</a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 TechInfo · Hecho por estudiantes</p>
    </div>
  `;

  document.body.appendChild(footer);

  /* =========================
     MODO OSCURO
  ========================= */
  const btn = document.getElementById("toggleDark");

  if (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  }
});

/* =========================
   MOSTRAR "OTRO"
========================= */
window.mostrarOtro = function (select) {
  const otro = document.getElementById("otro-tema-wrap");
  if (!otro) return;

  otro.style.display = select.value === "Otro" ? "block" : "none";
};

/* =========================
   AGREGAR PRODUCTO
========================= */
window.enviarProducto = function (e) {
  e.preventDefault();

  const categoria = document.getElementById("categoria");
  const nombre = document.getElementById("nombre");
  const precio = document.getElementById("precio");
  const imagen = document.getElementById("imagen");
  const contenedor = document.getElementById("productos");

  if (!categoria || !nombre || !precio || !imagen || !contenedor) return;

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${imagen.value}" alt="Producto: ${nombre.value}">

    <div class="info">
      <h3>${categoria.value}</h3>
      <p class="desc">${nombre.value}</p>
      <p class="precio">₡${precio.value}</p>
    </div>
  `;

  contenedor.appendChild(card);

  e.target.reset();
};

/* =========================
   CONTRATAR PAQUETE
========================= */
window.contratarPaquete = function (nombre) {
  alert("Has seleccionado el paquete: " + nombre);
};

/* =========================
   FORM CURSO
========================= */
window.enviarCurso = function (e) {
  e.preventDefault();
  alert("Formulario enviado correctamente");
  e.target.reset();
};
