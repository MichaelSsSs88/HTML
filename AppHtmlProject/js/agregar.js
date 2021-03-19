document.addEventListener("DOMContentLoaded", function(e) {

    document.getElementById("formulario_agregar").addEventListener("submit", function(e) {
        //alert(document.getElementById("add_arrive").value.trim());
        //e.preventDefault();

        if (document.getElementById("add_name").value.trim() != '' && document.getElementById("add_ip_1").value.trim() != '' && document.getElementById("add_ip_2").value.trim() != '' && document.getElementById("add_comentarios").value.trim() != '' && document.getElementById("add_out").value != '' && document.getElementById("add_arrive").value.trim() != '') {
            alert("Datos completos");
            save_trip();
            e.preventDefault();
        } else {

            $('#DatosIncompletos').modal("show");
            e.preventDefault();
        }
        e.preventDefault();

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