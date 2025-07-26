document.addEventListener("DOMContentLoaded", () => {
  const planes = [
    {
      titulo: "Aventura Andina en Machu Picchu",
      destino: "Perú",
      duracion: "7 días / 6 noches",
      precio: "$950",
      imagen: "img/plan_machu.jpg",
      actividades: [
        "Visita guiada a Machu Picchu",
        "Caminata por el Valle Sagrado",
        "Experiencia gastronómica local"
      ]
    },
    {
      titulo: "Cultura Pop y Tradición en Tokio",
      destino: "Japón",
      duracion: "5 días / 4 noches",
      precio: "$1,200",
      imagen: "img/plan_tokyo.jpg",
      actividades: [
        "Recorrido por Akihabara y templos antiguos",
        "Cena tradicional con espectáculo",
        "Tour por el Monte Fuji"
      ]
    },
    {
      titulo: "Safari Fotográfico en Kenia",
      destino: "Kenia",
      duracion: "10 días / 9 noches",
      precio: "$2,800",
      imagen: "img/plan_safari.jpg",
      actividades: [
        "Excursión por la Reserva Masai Mara",
        "Avistamiento de los Cinco Grandes",
        "Campamento en la sabana africana"
      ]
    }
  ];

  const contenedor = document.querySelector(".row.row-cols-1");

  planes.forEach((plan, index) => {
    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
      <div class="card h-100">
        <img src="${plan.imagen}" class="card-img-top" alt="${plan.titulo}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${plan.titulo}</h5>
          <p class="card-text">Una experiencia única en ${plan.destino}.</p>
          <ul class="list-unstyled">
            <li><i class="bi bi-calendar"></i> ${plan.duracion}</li>
            <li><i class="bi bi-geo-alt-fill"></i> ${plan.destino}</li>
            <li><i class="bi bi-cash"></i> Desde ${plan.precio}</li>
          </ul>
          <button class="btn btn-primary mt-auto ver-detalles" data-index="${index}" data-bs-toggle="modal" data-bs-target="#modalPlan">Ver detalles</button>
        </div>
      </div>
    `;

    contenedor.appendChild(col);
  });

  // Mostrar detalles en el modal
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("ver-detalles")) {
      const index = e.target.getAttribute("data-index");
      const plan = planes[index];

      document.getElementById("detalleDestino").textContent = plan.destino;
      document.getElementById("detalleDuracion").textContent = plan.duracion;
      document.getElementById("detallePrecio").textContent = plan.precio;

      const actividadesHTML = plan.actividades.map(act => `<li>${act}</li>`).join("");
      document.getElementById("detalleActividades").innerHTML = actividadesHTML;
    }
  });
});
