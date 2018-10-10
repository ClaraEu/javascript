//eventos

	//var boton = document.getElementById('boton');

	var boton = document.querySelector('#boton');

	boton.addEventListener('click', handleList);



	function handleList(e){

		e.preventDefault();

		llenarDatos();
		pintarDatos(listaPersonas);

	}




//modelo BBDD

var listaPersonas = new Array();

//var registro = { 'nombre': 'Juan', 'aficion' : 'Baloncesto'};

var registro = new Array();


//logica


	function llenarDatos(){

		var nombre = document.getElementById('nombre').value;

		var aficion = document.querySelector('#aficion').value;

		registro = { 'nombre' : nombre, 'aficion': aficion};

		listaPersonas.push(registro);

		document.getElementById('nombre').value = "";
		document.querySelector('#aficion').value = "";

	}


	function pintarDatos(pLista){


			var listado = document.getElementById('listado');

			
			listado.innerHTML = "";


			for(var i= 0; i<pLista.length; i++)
			{
				listado.innerHTML += '<li><strong>'+ pLista[i]['nombre'] +' :</strong> '+ pLista[i]['aficion'] +'</li>';
			}




	}

















