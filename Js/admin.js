// Fetch de productos
fetch('./data/datos.json')
  .then((respuesta) => respuesta.json())
  .then((datos) => mostrarProductos(datos));

// Mostrar productos
const mostrarProductos = (datos) => {
  let productos = "";
  const contenedor = document.querySelector("#contenedor");

  // Añadir clases para centrar
  contenedor.className = "d-flex flex-wrap justify-content-center align-items-center min-vh-100";

  productos += `<div class="row g-4 justify-content-center">`; // Centrar las filas
  datos.forEach((dato) => {
    productos += `
<div class="card border border-1 border-dark d-flex flex-column align-items-center"
            style="width: 100%; max-width: 300px; margin:30px">
            <img src="${dato.imagen}" class="card-img-top" alt="...">
            <div class="card-body ">
                <h4 class="text-center">${dato.titulo}</h4>
                <p class="card-text text-center">${dato.descripcion}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center w-100 mb-2 px-2 fs-3">
              <p class="card-text p-2 mb-0">
                <strong>$${dato.precio}</strong>
              </p>
            <div class="d-flex ms-auto">
              <a class="btn btn-outline-primary me-2" onClick="editar()">
                <i class="bi bi-pencil"></i>
              </a>
              <a class="btn btn-outline-danger" type="submit" onClick="eliminar()">
                <i class="bi bi-trash"></i>
              </a>
            </div>
          </div>
      </div>
    `;
  });
  productos += `</div>`;

  contenedor.innerHTML = productos;
};

// Función para abrir formulario de añadir
const añadir = () => {
  document.querySelector("#nuevoProd").style.display = "block";
  const formulario = document.querySelector("#formCrear");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
  });
};

// Función para abrir formulario de editar
const editar = () => {
  document.querySelector("#editar").style.display = "block";
  formularios.scrollIntoView({ behavior: "smooth", block: "start" });

};

// Función genérica para cerrar formularios
const cerrarFormulario = (id) => {
  document.getElementById(id).style.display = "none";
};
