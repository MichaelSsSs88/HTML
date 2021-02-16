document.addEventListener("DOMContentLoaded", function(e) {

    var elBotones = document.querySelectorAll("button");
    console.log(elBotones);

    /*Asignamos  función para escuchar*/
    for (var i = 0; i < elBotones.length; i++) {
        elBotones[i].addEventListener("click", manejarBotones, false)
    }


});

/*Podremos usar  this.id  para identificar cada botón*/
function manejarBotones(e) {
    e.preventDefault();
    if (this.id == "savename") {

        /* const name = document.getElementById('name').value;
         const lastname = document.getElementById('lastname').value;
         console.log(name);
         console.log(lastname);
         localStorage.setItem(name, lastname);*/
        /* var miObjeto = { 'usuario': 'Juan1', 'salida': 'Florencia', 'llegada': 'aguazarcas' };
         localStorage.setItem('usuario', JSON.stringify(miObjeto));
         var miObjeto = { 'usuario': 'Pedro1', 'salida': 'Florencia', 'llegada': 'aguazarcas' };
         localStorage.setItem('usuario', JSON.stringify(miObjeto));
         var miObjeto = { 'usuario': 'Martin1', 'salida': 'Florencia', 'llegada': 'aguazarcas' };
         localStorage.setItem('usuario', JSON.stringify(miObjeto));

         e.preventDefault();
         alert("Save");
         var guardado = localStorage.getItem('usuario');
         console.log('objetoObtenido: ', JSON.parse(guardado));
         var guardado = localStorage.getItem('usuario');
         console.log('objetoObtenido: ', JSON.parse(guardado));
         var guardado = localStorage.getItem('usuario');
         console.log('objetoObtenido: ', JSON.parse(guardado));*/

        var readuser = JSON.parse(localStorage.getItem('users')),
            readout = JSON.parse(localStorage.getItem('out')),
            readarrive = JSON.parse(localStorage.getItem('arrive'));

        var userscount = readuser.length;
        var usuario = []
        salida = [],
            llegada = [];

        for (var i = 0; i < userscount; i++) {
            usuario.push(readuser[i]);
            salida.push(readout[i]);
            llegada.push(readarrive[i]);
        }



        /*usuario.push('Karla');
        salida.push('Fortuna');
        llegada.push('San Jose');*/

        /* usuario.push('Maria');
         salida.push('Guatuso');
         llegada.push('Upala');*/

        usuario.push('Marta');
        salida.push('Puntarenas');
        llegada.push('Guanacaste');

        localStorage.setItem('users', JSON.stringify(usuario));
        localStorage.setItem('out', JSON.stringify(salida));
        localStorage.setItem('arrive', JSON.stringify(llegada));
        alert("Save");


    } else {

        const name = document.getElementById('cedula').value;
        const lastname = document.getElementById('correo').value;
        console.log(name);
        console.log(lastname);
        localStorage.setItem(name, lastname);
        e.preventDefault();
        alert("Save succesfully");

    }

}