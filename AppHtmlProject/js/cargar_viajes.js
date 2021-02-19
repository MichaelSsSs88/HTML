function llenarTabla() {

    var tbody = document.querySelector('#tabla_viajes tbody');
    // tbody.innerHTML = '';

    /*  var encabezado = document.createElement('tr');

      var titulousuario = document.createElement('th'),
          titulosalida = document.createElement('th'),
          titulollegada = document.createElement('th'),
          titulovista = document.createElement('th');

      encabezado.appendChild(titulousuario.appendChild(document.createTextNode('Usuario')));
      encabezado.appendChild(titulosalida.appendChild(document.createTextNode('Salida')));
      encabezado.appendChild(titulollegada.appendChild(document.createTextNode('LLegada')));
      encabezado.appendChild(titulovista.appendChild(document.createTextNode('')));
      tbody.appendChild(encabezado);*/

    var readuser = JSON.parse(localStorage.getItem('users')),
        readout = JSON.parse(localStorage.getItem('out')),
        readarrive = JSON.parse(localStorage.getItem('arrive'));

    var userscount = readuser.length;
    var usuario = []
    salida = [],
        llegada = [];

    for (var i = 0; i < userscount; i++) {
        var fila = document.createElement('tr');

        var celdausuario = document.createElement('td'),
            celdasalida = document.createElement('td'),
            celdallegada = document.createElement('td');
        celdavista = document.createElement('td');
        celdausuario.appendChild(document.createTextNode(readuser[i]));
        fila.appendChild(celdausuario);
        celdasalida.appendChild(document.createTextNode(readout[i]));
        fila.appendChild(celdasalida);
        celdallegada.appendChild(document.createTextNode(readarrive[i]))
        fila.appendChild(celdallegada);
        var button = document.createElement("button");
        button.onclick = myFunction;
        //button.addEventListener("click", myFunction, false);
        button.innerText = "Editar";
        button.setAttribute
        celdavista.appendChild(button);
        celdavista.appendChild(document.createTextNode("  "))
        var button_1 = document.createElement("button");
        button_1.innerText = "Eliminar";
        celdavista.appendChild(button_1);
        //celdavista.appendChild(document.createTextNode("Boton"));
        fila.appendChild(celdavista);
        tbody.appendChild(fila);
    }
}

function myFunction() {

    document.getElementById('tabsilver').checked = true;
    document.getElementById('tabgold_1').checked = true;

}
llenarTabla();