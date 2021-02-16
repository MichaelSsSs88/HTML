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
        celdavista.appendChild(document.createTextNode('sdsdds'));
        fila.appendChild(celdavista);
        tbody.appendChild(fila);
    }



}
llenarTabla();