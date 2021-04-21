function llenarTablaUsuario() {
    var tbody = document.querySelector('#tabla_viajes tbody');
    var getlocal = localStorage.getItem("trips");
    var parslocal;
    try {
        $('#tabla_viajes tbody tr').remove();
        var fila_titulo = document.createElement('tr');
        viaje = document.createElement('th'),
            usuario = document.createElement('th'),
            salida = document.createElement('th'),
            llegada = document.createElement('th'),
            accion = document.createElement('th');
        accion2 = document.createElement('th');
        viaje.appendChild(document.createTextNode("ID VIAJE"));
        fila_titulo.appendChild(viaje);
        usuario.appendChild(document.createTextNode("USUARIO"));
        fila_titulo.appendChild(usuario);
        salida.appendChild(document.createTextNode("LUGAR SALIDA"));
        fila_titulo.appendChild(salida);
        llegada.appendChild(document.createTextNode("LUGAR LLEGADA"));
        fila_titulo.appendChild(llegada);
        accion.appendChild(document.createTextNode("EDITAR"));
        fila_titulo.appendChild(accion);
        accion2.appendChild(document.createTextNode("ELIMINAR"));
        fila_titulo.appendChild(accion2);
        tbody.appendChild(fila_titulo);



    } catch {
        //alert("VACIO");
    }


    //var cargarViajes = new Array();

    var contador = 1;
    if (getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined) { //Comprobamos que el elemento existe en localStorage
        parslocal = JSON.parse(getlocal);
        //alert(parslocal.lenght());
        parslocal.forEach(element => {
            if (element.nombreUsuario == sessionStorage.getItem('username')) {
                var fila = document.createElement('tr');
                var celdaviaje = document.createElement('td'),
                    celdausuario = document.createElement('td'),
                    celdasalida = document.createElement('td'),
                    celdallegada = document.createElement('td');
                celdavista = document.createElement('td');
                celdavista2 = document.createElement('td');
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
                celdavista2.appendChild(button_1);
                //celdavista.appendChild(document.createTextNode("Boton"));
                fila.appendChild(celdavista);
                fila.appendChild(celdavista2);
                tbody.appendChild(fila);

            }
            contador++;

        });


    }


};


var editando = 0;

function myFunction() {
    editando = 1;
    document.getElementById('tabsilver').checked = true;
    document.getElementById('tabgold_1').checked = true;

    $('tr td').click(function() {

        var nombre = $(this).parent().find('td:first').text();
        var getlocal = localStorage.getItem("trips");
        var parslocal;

        //var cargarViajes = new Array();
        var contador = 1;
        if (getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined) { //Comprobamos que el elemento existe en localStorage
            parslocal = JSON.parse(getlocal);
            document.getElementById('editar_nombre_viaje').value = parslocal[nombre - 1].nombreViaje;
            document.getElementById('edit_place_out').value = parslocal[nombre - 1].lugarSalida;
            document.getElementById('edit_place_arrive').value = parslocal[nombre - 1].lugarLlegada;
            document.getElementById('edit_description').value = parslocal[nombre - 1].comentarios;
            document.getElementById('edit_hour_out').value = parslocal[nombre - 1].horaSalida;
            document.getElementById('edit_hour_arrive').value = parslocal[nombre - 1].horaLlegada;
            document.getElementById('edit_check1').checked = parslocal[nombre - 1].Lunes;
            document.getElementById('edit_check2').checked = parslocal[nombre - 1].Martes;
            document.getElementById('edit_check3').checked = parslocal[nombre - 1].Miercoles;
            document.getElementById('edit_check4').checked = parslocal[nombre - 1].Jueves;
            document.getElementById('edit_check5').checked = parslocal[nombre - 1].Viernes;
            document.getElementById('edit_check6').checked = parslocal[nombre - 1].Sabado;
            document.getElementById('edit_check7').checked = parslocal[nombre - 1].Domingo;
            editar_ride = nombre;

        }


    });

};


var verificadorBorrado = -1;

function acceptDelete() {


    var getlocal = localStorage.getItem("trips");
    var parslocal;

    if (getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined && verificadorBorrado > -1) { //Comprobamos que el elemento existe en localStorage
        parslocal = JSON.parse(getlocal);
        parslocal.splice(verificadorBorrado - 1, 1);
        localStorage.setItem("trips", JSON.stringify(parslocal));

        $(this).closest('tr').remove();
        verificadorBorrado = -1;
        llenarTablaUsuario();
    }
    $('#ConfirmacionEliminar').modal("hide");
}

function delete_trip() {
    if (editando != 1) {
        $('tr td:last-child').click(function() {

            var nombre = $(this).parent().find('td:first').text();
            verificadorBorrado = nombre;
            $('#ConfirmacionEliminar').modal("show");


        });
    }
    editando = -1;

}




llenarTablaUsuario();