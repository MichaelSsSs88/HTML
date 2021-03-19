include(cargar_viajes.js)

function validarFormulario() {
    var side_out = document.getElementById('find_place_out').value;
    var side_arrive = document.getElementById('find_place_arrive').value;

    if (side_out != '' && side_arrive == '') {

        var tbody = document.querySelector('#tabla_viajes tbody');
        try {
            tbody.innerHTML = '';
            var fila_titulo = document.createElement('tr');
            var titulousuario = document.createElement('th'),
                titulosalida = document.createElement('th'),
                titulollegada = document.createElement('th');
            titulovista = document.createElement('th');
            titulousuario.appendChild(document.createTextNode("Usuario"));
            titulosalida.appendChild((document.createTextNode("Inicio")));
            titulollegada.appendChild((document.createTextNode("Fin")));
            titulovista.appendChild((document.createTextNode("Vista")));
            fila_titulo.appendChild(titulousuario);
            fila_titulo.appendChild(titulosalida);
            fila_titulo.appendChild(titulollegada);
            fila_titulo.appendChild(titulovista);
            tbody.appendChild(fila_titulo);


        } catch {

        }


        var readuser = JSON.parse(localStorage.getItem('users')),
            readout = JSON.parse(localStorage.getItem('out')),
            readarrive = JSON.parse(localStorage.getItem('arrive'));

        //var cantidad=0;
        var userscount = readuser.length;

        /* for (var i = 0; i < userscount; i++) {
             if(readout[i]==side_out){

             }
         }*/

        var usuario = []
        salida = [],
            llegada = [];

        for (var i = 0; i < userscount; i++) {
            alert(readout[i]);
            if (readout[i] == side_out) {

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


    } else if (side_arrive != '' && side_out == '') {

    } else if (side_arrive != '' && side_out != '') {

    } else {
        llenarTabla();
    }
    //alert(side_arrive);
}