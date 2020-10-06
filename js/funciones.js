function validar(){
	var form = document.form;

	if (form.nombre.value=="") {
		alert("Ingresa tu nombre");
		form.nombre.value="";
		form.nombre.focus();
		return false;
	}

	if (!validarEmail(form.email.value)) {
		alert("El correo electrónico no es válido");
		form.email.value="";
		form.email.focus();
		return false;
	}

	if (form.fecha.value=="") {
		alert("Ingresa tu fecha de nacimiento");
		form.fecha.value="";
		form.fecha.focus();
		return false;
	}

	if (form.comuna.value=="") {
		alert("Selecciona una comuna de la lista");
		form.comuna.value="";
		form.comuna.focus();
		return false;
	}

	if (form.comentarios.value=="") {
		alert("Ingresa tu comentario");
		form.comentarios.value="";
		form.comentarios.focus();
		return false;
	}

	form.submit();
}

function validarEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}