document.addEventListener("DOMContentLoaded", function(e) {
    sessionStorage.clear();
});

function llenarTabla() {
    var tbody = document.querySelector('#tabla_viajes tbody');
    var getlocal = localStorage.getItem("trips");
    var parslocal;
    //var cargarViajes = new Array();
    var contador = 1;
    if (getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined) { //Comprobamos que el elemento existe en localStorage
        parslocal = JSON.parse(getlocal);
        parslocal.forEach(element => {
            var fila = document.createElement('tr');
            fila.className = 'container'
            var celdaviaje = document.createElement('td'),
                celdausuario = document.createElement('td'),
                celdasalida = document.createElement('td'),
                celdallegada = document.createElement('td');
            celdavista = document.createElement('td');
            //celdausuario.className = "data";
            celdaviaje.appendChild(document.createTextNode(contador));
            fila.appendChild(celdaviaje);
            celdausuario.appendChild(document.createTextNode(element.nombreUsuario));
            fila.appendChild(celdausuario);
            celdasalida.appendChild(document.createTextNode(element.lugarSalida));
            fila.appendChild(celdasalida);
            celdallegada.appendChild(document.createTextNode(element.lugarLlegada))
            fila.appendChild(celdallegada);
            /*var button = document.createElement("button");
            button.className = "boton";
            button.onclick = myFunction;
            //button.addEventListener("click", myFunction, false);
            button.innerText = "Editar";
            //button.setAttribute
            celdavista.appendChild(button);
            celdavista.appendChild(document.createTextNode("  "));
            var button_1 = document.createElement("button");
            button_1.innerText = "Eliminar";
            button_1.onclick = delete_trip;
            celdavista.appendChild(button_1);
            //celdavista.appendChild(document.createTextNode("Boton"));
            fila.appendChild(celdavista);*/

            tbody.appendChild(fila);
            contador++;
        });



    }

};



function myFunction() {

    document.getElementById('tabsilver').checked = true;
    document.getElementById('tabgold_1').checked = true;



    $('tr td:last-child').click(function() {

        var nombre = $(this).parent().find('td:first').text();



    });

};

function delete_trip() {
    $('tr td:last-child').click(function() {


        var nombre = $(this).parent().find('td:first').text();




    });

}




llenarTabla();