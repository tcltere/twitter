document.getElementById("btn").addEventListener("click", add);
contador();

function add(){
	var mensaje = document.getElementById("escribir").value;

	document.getElementById("escribir").value = "";
	document.getElementById("cont").textContent = "140";


	var comment = document.getElementById("comment");


	if(mensaje.length == 0 || mensaje == null) {
		alert('Debes ingresar un mensaje');
		return false;

    }

    var nodo = document.createTextNode(mensaje);
    var parrafo = document.createElement("p");
    var contenedor = document.createElement("div");
    parrafo.appendChild(nodo);
    contenedor.appendChild(parrafo);
    comment.appendChild(contenedor);
}
document.getElementById("escribir").addEventListener("keydown", contador);
function contador(){
	var contar = document.getElementById("escribir").value.length;
	var cont = document.getElementById("cont");
    var nodo1 = document.createTextNode(contar);
	cont.textContent = 140-contar;
    

	}
