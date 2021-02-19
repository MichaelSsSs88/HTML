document.addEventListener("DOMContentLoaded", function(e) {

    document.formulario.addEventListener("submit", validarFormulario);
    window.formulario.username.addEventListener("input", function() {
        document.getElementById("username").innerHTML = "";
        document.getElementById("password").innerHTML = "";
        document.getElementById("copypassword").innerHTML = "";
    })

    var elBotones = document.querySelectorAll("button");

    console.log(elBotones);

    /*Asignamos  función para escuchar*/
    for (var i = 0; i < elBotones.length; i++) {

        elBotones[i].addEventListener("click", manejarBotones, false)
    }

    var links = document.querySelectorAll("a");



});

function validarFormulario(e) {
    e = e || window.event;

    alert(this.id);
    if (this.id == 'ctn-bars-search') {
        var username = document.getElementById('username').value;
        var name = document.getElementById('name').value;

        var lastname = document.getElementById('lastname').value;

        var phone = document.getElementById('phone').value;

        var password = document.getElementById('password').value;

        var passwordcopy = document.getElementById('copypassword').value;

        if (username != '' && name != '' && lastname != '' && phone != '' && password != '' && passwordcopy != '') {
            var miObjeto = { Nombre: name, Apellidos: lastname, Telefono: phone, Password: password };


            try {
                var readuser = JSON.parse(localStorage.getItem(username));
            } catch (exception) {

            }



            if (readuser == null) {
                if (password == passwordcopy) {
                    localStorage.setItem(username, JSON.stringify(miObjeto));

                    alert("Usuario agregado exitosamente");
                    window.location.href = "login.html";
                } else
                    alert('Las contrasenas no coinciden');
                e.preventDefault();
            } else {
                alert('El usuario ya existe, por favor agregar otro usuario');
                e.preventDefault();
            }

        } else {
            alert('Favor completar todos los datos');
            e.preventDefault();
        }

    } else if (this.id == 'form_login') {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username != '' && password != '') {



            try {
                var readuser = JSON.parse(localStorage.getItem(username));
            } catch (exception) {

            }



            if (readuser == null) {
                alert("El usuario no existe");
                e.preventDefault();
            } else if (readuser.Password == password) {

            } else {
                alert('Password incorrecto');
                e.preventDefault();
            }


        } else {
            alert("Favor ingresar usuario y password");
            e.preventDefault();
        }

    }

}


function manejarBotones(e) {
    e.preventDefault();

    alert(this.id);
    if (this.id == "boton_guardado") {
        var username = document.getElementById('username').value;
        var name = document.getElementById('name').value;

        var lastname = document.getElementById('lastname').value;

        var phone = document.getElementById('phone').value;

        var password = document.getElementById('password').value;

        var passwordcopy = document.getElementById('copypassword').value;

        if (username != '' && name != '' && lastname != '' && phone != '' && password != '' && passwordcopy != '') {
            var miObjeto = { Nombre: name, Apellidos: lastname, Telefono: phone, Password: password };


            try {
                var readuser = JSON.parse(localStorage.getItem(username));
            } catch (exception) {

            }


            // alert(readuser.length())
            if (readuser == null && password != '') {
                if (password == passwordcopy) {
                    localStorage.setItem(username, JSON.stringify(miObjeto));

                    alert("Usuario agregado exitosamente");

                    window.location.href = "login.html";
                } else
                    alert('Las contrasenas no coinciden');
            } else {
                alert('El usuario ya existe, por favor agregar otro usuario');
                //window.CloseEvent


            }

        } else {
            alert('Favor completar todos los datos');
        }

    }

}