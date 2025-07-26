// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function (){

    // Mostrar datos al hacer clic en "Hacer Reservación"
    document.querySelectorAll(".btnReservar").forEach(boton => {
        boton.addEventListener("click", function (){
            // Mostrar los datos en el modal
            document.getElementById("modalCiudad").textContent = ciudad || "No especificado";
            document.getElementById("modalInicio").textContent = fechaInicio || "No especificado";
            document.getElementById("modalFin").textContent = fechaFin || "No especificado";
            document.getElementById("modalAdultos").textContent = adultos || "0";
            document.getElementById("modalNinos").textContent = ninos || "0";
            document.getElementById("modalHabitaciones").textContent = habitaciones || "0";
            document.getElementById("modalMascotas").textContent = mascotas === "si" ? "si" : "no";

            const myModal = new bootstrap.Modal(document.getElementById("reservaModal"));
            myModal.show();
        });
    });

    const btnMapas = document.getElementById("btnMapa");

    if(btnMapas){
        btnMapas.addEventListener('click', function(){
            window.open('https://www.google.com/maps/place/Madrid,+España', '_blank');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnConfirmar').addEventListener('click', function () {
        alert('¡Reservación realizada con éxito!');
    });
});

document.addEventListener('DOMContentLoaded', function (){
    const precios = {
        'paris': {
            'agosto': '$150 - $350',
            'septiembre': '$300 - $600',
            'octubre': '$300 - $250',
            'noviembre': '$400 - $350',
            'diciembre': '$420 - $550'
        },
        'nueva-york': {
            'agosto': '$200 - $400',
            'septiembre': '$250 - $500',
            'octubre': '$275 - $450',
            'noviembre': '$300 - $550',
            'diciembre': '$350 - $600'
        },
        'tokio': {
            'agosto': '$180 - $300',
            'septiembre': '$220 - $350',
            'octubre': '$210 - $370',
            'noviembre': '$240 - $380',
            'diciembre': '$260 - $400'
        },
        'buenos-aires': {
            'agosto': '$100 - $250',
            'septiembre': '$120 - $300',
            'octubre': '$140 - $310',
            'noviembre': '$160 - $320',
            'diciembre': '$180 - $330'
        }
    };

    const listButton = document.querySelectorAll('.ciudad-btn');

    listButton.forEach(boton => {
        boton.addEventListener('click', () =>{
            const ciudad = boton.getAttribute('data-ciudad')
            const data = precios[ciudad];

            document.getElementById('precio-agosto').textContent = data.agosto;
            document.getElementById('precio-septiembre').textContent = data.septiembre;
            document.getElementById('precio-octubre').textContent = data.octubre;
            document.getElementById('precio-noviembre').textContent = data.noviembre;
            document.getElementById('precio-diciembre').textContent = data.diciembre;
        });
    });
});
