function validarFormulario() {
    var side_out = document.getElementById('find_place_out').value;
    var side_arrive = document.getElementById('find_place_arrive').value;
    var tbody = document.querySelector('#tabla_viajes tbody');
    var contador = 1;
    try {
        tbody.innerHTML = '';
        var fila_titulo = document.createElement('tr');
        var titulousuario = document.createElement('th'),
            titulosalida = document.createElement('th'),
            tituloid = document.createElement('th'),
            titulollegada = document.createElement('th');
        titulovista = document.createElement('th');
        tituloid.appendChild(document.createTextNode("Id Viaje"));
        titulousuario.appendChild(document.createTextNode("Usuario"));
        titulosalida.appendChild((document.createTextNode("Inicio")));
        titulollegada.appendChild((document.createTextNode("Fin")));
        titulovista.appendChild((document.createTextNode("Vista")));
        fila_titulo.appendChild(tituloid);
        fila_titulo.appendChild(titulousuario);
        fila_titulo.appendChild(titulosalida);
        fila_titulo.appendChild(titulollegada);
        fila_titulo.appendChild(titulovista);
        tbody.appendChild(fila_titulo);


    } catch {

    }

    if (side_out != '' && side_arrive == '') {



        var getlocal = localStorage.getItem("trips");

        var parslocal;

        if (getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined) { //Comprobamos que el elemento existe en localStorage
            parslocal = JSON.parse(getlocal);

            parslocal.forEach(element => {
                if (element.lugarSalida == side_out) {
                    cargarDatos(element, contador, tbody);
                }
                contador++;

            });



        }


    } else if (side_arrive != '' && side_out == '') {
        var getlocal = localStorage.getItem("trips");

        var parslocal;

        if (getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined) { //Comprobamos que el elemento existe en localStorage
            parslocal = JSON.parse(getlocal);

            parslocal.forEach(element => {
                if (element.lugarLlegada == side_arrive) {
                    cargarDatos(element, contador, tbody);
                }
                contador++;

            });



        }

    } else if (side_arrive != '' && side_out != '') {
        var getlocal = localStorage.getItem("trips");

        var parslocal;

        if (getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined) { //Comprobamos que el elemento existe en localStorage
            parslocal = JSON.parse(getlocal);

            parslocal.forEach(element => {
                if (element.lugarLlegada == side_arrive && element.lugarSalida == side_out) {
                    cargarDatos(element, contador, tbody);
                }
                contador++;

            });



        }

    } else {
        llenarTabla();
    }
    //alert(side_arrive);
}

function cargarDatos(element, contador, tbody) {
    var fila = document.createElement('tr');
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
    var button = document.createElement("button");
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
    fila.appendChild(celdavista);
    tbody.appendChild(fila);

}