function add(){
	var mensaje = document.getElementById("mensaje").value;

	document.getElementById("mensaje").value = "";

	var cont = documet.getElementById("cont");

	if(mensaje.length == 0 || mensaje == null) {
		alert('Debes ingresar un mensaje');
		return false;
	}
	
	