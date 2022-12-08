    var nombreError = document.getElementById('nombre_error');
    var emailError = document.getElementById('email_error');
    var asuntoError = document.getElementById('asunto_error');
    var mensajeError = document.getElementById('mensaje_error');

    function validarNombre() {
        var nombre = document.getElementById('nombre').value;
        if(nombre.length == 0) {
            nombreError.innerHTML = 'El nombre es requerido';
            return false;
        }
        if(nombre.length > 50 ) {
            nombreError.innerHTML = 'El nombre es muy largo';
            return false;
        }
        nombreError.innerHTML = 'Nombre valido';
        return true;  
        }

    function validarEmail() {
        var email = document.getElementById('email').value;
        var valEmail = /^[\w].+@{1}[\w].+\.[a-z]{2,3}$/;
        if(email.length == 0) {
            emailError.innerHTML = 'El email es requerido';
            return false;
        }
        if(!email.match(valEmail)){
            emailError.innerHTML = 'Email invalido';
            return false; 
        }
        emailError.innerHTML = 'email valido';
        return true;  
    }

    function validarAsunto() {
        var asunto = document.getElementById('asunto').value;
        if(asunto.length == 0) {
            asuntoError.innerHTML = 'El asunto es requerido';
            return false;
        }
        if(asunto.length > 50 ) {
            asuntoError.innerHTML= 'El asunto es muy largo';
            return false;
        }
        asuntoError.innerHTML = 'asunto valido';
        return true;  
        }

    function validarMensaje() {
        var mensaje= document.getElementById('mensaje').value;
        if(mensaje.length == 0) {
            mensajeError.innerHTML = 'El mensaje es requerido';
            return false;
        }
        if(mensaje.length > 300 ) {
            mensajeError.innerHTML= 'El mensaje es muy largo';
            return false;
        }
        mensajeError.innerHTML = 'mensaje valido';
        return true;  
    }

    function limpiarFormulario() {
        document.getElementById("formulario").reset();
      }




   