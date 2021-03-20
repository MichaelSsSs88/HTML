document.addEventListener("DOMContentLoaded", function(e) {

    document.getElementById("formulario_agregar").addEventListener("submit", function(e) {
        //alert(document.getElementById("add_arrive").value.trim());
        //e.preventDefault();

        if (document.getElementById("add_name").value.trim() != '' && document.getElementById("add_ip_1").value.trim() != '' && document.getElementById("add_ip_2").value.trim() != '' && document.getElementById("add_comentarios").value.trim() != '' && document.getElementById("add_out").value != '' && document.getElementById("add_arrive").value.trim() != '') {
            save_trip();
            document.getElementById("formulario_agregar").reset();
            $('#DatosCompletos').modal("show");
            e.preventDefault();
        } else {
            $('#DatosIncompletos').modal("show");
            e.preventDefault();
        }
        e.preventDefault();

    });

    document.getElementById("edit_editar").addEventListener("submit", function(e) {
        //alert(document.getElementById("add_arrive").value.trim());
        //e.preventDefault();

        if (document.getElementById('editar_nombre_viaje').value.trim() != '' && document.getElementById('edit_place_out').value.trim() != '' && document.getElementById('edit_place_arrive').value.trim() != '' && document.getElementById('edit_description').value.trim() != '' && document.getElementById('edit_hour_out').value != '' && document.getElementById('edit_hour_arrive').value.trim() != '') {
            alert("Datos completos");
            if (update_trip()) {
                $('#DatosCompletos').modal("show");
                document.getElementById("edit_editar").reset();
                e.preventDefault();
            } else {
                alert("Error de seleccion");
                e.preventDefault();
            }


            //e.preventDefault();
        } else {

            $('#DatosIncompletos').modal("show");
            alert(document.getElementById("exampleModalLabel").innerHTML);
            document.getElementById("exampleModalLabel").innerHTML = "Denegado";
            e.preventDefault();
        }
        // e.preventDefault();

    });

});


function save_trip() {
    var getlocal = localStorage.getItem("trips");
    var parslocal;
    var cont;
    var nuevovalor = new Array();

    if (getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined) { //Comprobamos que el elemento existe en localStorage
        parslocal = JSON.parse(getlocal);

        $.each(parslocal, function(index, value) {

            cont = index;

            nuevovalor[index] = value; //llenamos nuestro array vacío con los valores que ya existen en nuestro elemento

        });

        cont++;
        nuevovalor[cont] = {
            nombreUsuario: sessionStorage.getItem('username'),
            nombreViaje: document.getElementById("add_name").value.trim(),
            lugarSalida: document.getElementById("add_ip_1").value.trim(),
            lugarLlegada: document.getElementById("add_ip_2").value.trim(),
            comentarios: document.getElementById("add_comentarios").value.trim(),
            horaSalida: document.getElementById("add_out").value,
            horaLlegada: document.getElementById("add_arrive").value.trim(),
            Lunes: document.getElementById("add_check1").checked,
            Martes: document.getElementById("add_check2").checked,
            Miercoles: document.getElementById("add_check3").checked,
            Jueves: document.getElementById("add_check4").checked,
            Viernes: document.getElementById("add_check5").checked,
            Sabado: document.getElementById("add_check6").checked,
            Domingo: document.getElementById("add_check7").checked
        };
        localStorage.setItem("trips", JSON.stringify(nuevovalor));
        llenarTablaUsuario();

        alert('here');
    } else {
        nuevovalor[0] = {
            nombreUsuario: sessionStorage.getItem('username'),
            nombreViaje: document.getElementById("add_name").value.trim(),
            lugarSalida: document.getElementById("add_ip_1").value.trim(),
            lugarLlegada: document.getElementById("add_ip_2").value.trim(),
            comentarios: document.getElementById("add_comentarios").value.trim(),
            horaSalida: document.getElementById("add_out").value,
            horaLlegada: document.getElementById("add_arrive").value.trim(),
            Lunes: document.getElementById("add_check1").checked,
            Martes: document.getElementById("add_check2").checked,
            Miercoles: document.getElementById("add_check3").checked,
            Jueves: document.getElementById("add_check4").checked,
            Viernes: document.getElementById("add_check5").checked,
            Sabado: document.getElementById("add_check6").checked,
            Domingo: document.getElementById("add_check7").checked
        };
        localStorage.setItem("trips", JSON.stringify(nuevovalor));
        alert('nothere');
        llenarTablaUsuario();
    }

    parslocal = JSON.parse(getlocal);

    $.each(parslocal, function(index, value) {

        cont = index;

        nuevovalor[index] = value; //llenamos nuestro array vacío con los valores que ya existen en nuestro elemento

    });

    console.log(nuevovalor);
};

var editar_ride = -1;

function update_trip() {

    if (editar_ride != -1) {
        var nombre = editar_ride;
        var getlocal = localStorage.getItem("trips");
        alert(getlocal.length);
        var parslocal;
        if (getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined) { //Comprobamos que el elemento existe en localStorage
            parslocal = JSON.parse(getlocal);
            parslocal[nombre - 1].nombreViaje = document.getElementById('editar_nombre_viaje').value;
            parslocal[nombre - 1].lugarSalida = document.getElementById('edit_place_out').value;
            parslocal[nombre - 1].lugarLlegada = document.getElementById('edit_place_arrive').value;
            parslocal[nombre - 1].comentarios = document.getElementById('edit_description').value;
            parslocal[nombre - 1].horaSalida = document.getElementById('edit_hour_out').value;
            parslocal[nombre - 1].horaLlegada = document.getElementById('edit_hour_arrive').value;
            parslocal[nombre - 1].Lunes = document.getElementById('edit_check1').checked;
            parslocal[nombre - 1].Martes = document.getElementById('edit_check2').checked;
            parslocal[nombre - 1].Miercoles = document.getElementById('edit_check3').checked;
            parslocal[nombre - 1].Jueves = document.getElementById('edit_check4').checked;
            parslocal[nombre - 1].Viernes = document.getElementById('edit_check5').checked;
            parslocal[nombre - 1].Sabado = document.getElementById('edit_check6').checked;
            parslocal[nombre - 1].Domingo = document.getElementById('edit_check7').checked;
            localStorage.setItem("trips", JSON.stringify(parslocal));
            llenarTablaUsuario();
        }
        editar_ride = -1;
        return true;
    }
    editar_ride = -1;
    return false;
}


/*window.onload = function() {

    // creamos los eventos para cada elemento con la clase "boton"
    let elementos = document.getElementsByClassName("boton");

    for (let i = 0; i < elementos.length; i++) {

        // cada vez que se haga clic sobre cualquier de los elementos,
        // ejecutamos la función obtenerValores()
        elementos[i].addEventListener("click", obtenerValores);
    }
}

// funcion que se ejecuta cada vez que se hace clic
function obtenerValores(e) {
    var valores = "";

    // vamos al elemento padre (<tr>) y buscamos todos los elementos <td>
    // que contenga el elemento padre
    var elementosTD = e.srcElement.parentElement.getElementsByTagName("td");

    alert(elementosTD.length);
    // recorremos cada uno de los elementos del array de elementos <td>
    for (let i = 0; i < elementosTD.length; i++) {

        // obtenemos cada uno de los valores y los ponemos en la variable "valores"
        valores += elementosTD[i].innerHTML + "\n";
    }

    alert(valores);
}*/