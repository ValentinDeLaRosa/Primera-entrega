let cursos = [
 {
 	nombre:'Node.js',
 	ID: 1,
 	horas: 36,
 	costo: 0
 	},
 {
 	nombre:'Ingles',
 	ID: 2,
 	horas: 36,
 	costo: 150000
 	},
 {
 	nombre:'Finanzas',
 	ID:3,
 	horas: 60,
 	costo: 200000
 }
  ];




console.log('La lista de cursos es la siguiente:  \n');
 setTimeout(function(){console.log( 
 	 'Nombre: Node.js    ' + 'Horas requeridas: ' + cursos[0].horas + '    Costo: ' + cursos[0].costo);},
 	 2000);

 setTimeout(function(){console.log( 
 	 'Nombre: Ingles    ' + ' Horas requeridas: ' + cursos[1].horas + '    Costo: ' + cursos[1].costo);},
 	 4000);
 
 setTimeout(function(){console.log(
 	'Nombre: finanzas   ' + 'Horas requeridas: ' + cursos[2].horas + '    Costo: ' + cursos[2].costo);},
 	 6000);		

const fs = require('fs');

 estudiante = {
 	nombre:{  demand: true, alias: 'n'},
 	cedula:{  demand: true, alias: 'x'},
 	id:{demand: true, alias: 'i'}}

const argv = require ('yargs')
			.command('inscribir', 'inscribir estudiante', 

				estudiante).argv





if (argv.id>0){


	let BuscarID = cursos.find(function(idbuscado ) {
	return idbuscado.ID == argv.id});



	//console.log(estudiante.nombre);
//	console.log(argv.nombre);

let creararchivo = () => {
	texto = ('El estudiante de nombre '+argv.nombre + 
	' identificado con cedula: ' + argv.cedula +
	' Se ha matriculado en el curso de ' + BuscarID.nombre +
	' que tiene como ID: ' + BuscarID.ID + ' Y que cuesta ' + BuscarID.costo);
	
 fs.writeFile('texto.txt', texto, (err) => {
 	if (err) throw (err);
 	console.log(' Texto Creado correctamente')
 });
}


creararchivo ()

}
 //	console.log(BuscarID.nombre);
 //	console.log(argv);


//console.log('El estudiante de nombre '+argv.nombre +
//	' Se ha matriculado en el curso de ' + BuscarID.nombre +
//	' que tiene como ID: ' + BuscarID.ID
//	)




