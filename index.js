// Ejercicio 9 de febrero en la tarde

/* vamos a pedir al usuario que ingrese la cantidad alumnos a los cuales les asignará una nota, luego de que ingrese la catidad de notas de cada alumnos, se va a desplegar un menú.
las opciones del menú serán la siguentes:
1.- mostrar el promedio de notas
2.- mostrar si la nota es aprobatoria o reprobatoria
3.- mosatrar si la nota está por sobre o por debajo del promedio del curso
*/
  

// Primero definir el array. es bueno que sea constante porque asi me aseguro que siempre será un array y no cambiará esa estructura.

// ejemplo si usara el const = a+b, y se definen las variables a y b, la constante tomará el valor total aunque luego cambie el valor de las variables, entonces no es bueno usar const en esos casos.


// definir variable para solicitar dato a usuario, recordar que se debe colocar parseint porqe el dato que te entrega el usuario está en string y yo necesito un numero.


// para ingresar los datos al array podriía ser un while o un for pero idealmente un for porque ya se hasta cuando finalizar.

// primer parametro: i=1 porque significa que el for parte con el primer alumno.
// segundo parametro: i >= cantidad porque significa que el for va a continuar mientras funcione esa condición. a diferencia del while.
// tercer paramenteo i++ es porque cada vez que termine el ciclo, debe continuar al siguiente i en este caso al siguiente numero de alumno. Al ppio pensé que en el tercer parámetro hay que poner lo que quiero que haga, por lo tanto pense en colocar el indice del array pero lo que realmente quiero es que es i cambia al segundo i porque eso es i++

// los ; = van en cada declaración de variables, y en general en cada fila excepto cuando hay un  { como en el caso de los for.

// console log dentro o fuera del for = va a depender si quiero mostrar un resultado en cada ciclo del for o solo un valor final después de que termine de ejecutarse el ciclo.

// para posicionar la nota ingresada en el array, se debe usar el push 

// para asegurarse de que la nota está dentro del rango 1 al 7, debo validar la nota y si se equivoca hay que pedirsela de nuevo al usuario. para eso vamos a utilizar un do while porque el do while se usa cuando algo tiene que pasar al menos una vez si o si (en este caso pedir la nota) y si está bien, pedirla de nuevo.  bajo esa lógica, el wo while se debe colocar antes de definir la variable notaAlumno. 

// se define primer let notaAlumno=0 para que se pueda utilizar de manera global dentro del let

//el rango del while se coloca lo que está malo, no lo que quiero que esté bien (en este caso hay que poner menor a 1 y sobre 7)

// me perdi unos 10 min a las 16:10

//definimos una nueva constante que es la nota aprobatoria 

//definir las funciones del menú, en el caso de la funcion del promedio notas ponemos un for para recorrer cada nota del arreglo. 

// en la función de promedio notas definimos el parametro arregloNotas sin necesidad que se haya definido como una variable anteriormente porque la funcion va a a ser lo mismo independiente del valor que le otorgue a arreglo notas, eso se define cuando llamo a la funcion. igual está bien cuando yo lo dejo sin parametro y luego llamo a la funcion sin parametros pero puede generar confusion

//declaramos la fx con nombre promediOnOTAS Y SE LE ENTREGARA UN PARAMETRO QUE SERÁ REEMPLAZADO CUANDO LA FUNCION SEA LLAMADA, DECLAMARIMOS UNA VARIABLE ACUMULADORA LLAMADA SUMA, LA CUAL SE ENCARGARA DE GUARDAR LA SUMAL TOTAL DE TODAS LAS NOTAS EN NUESTRO ARRREGLO. PARAR RECORRER NUESTRO ARREGLO OCUPAMOS LA FX POR LA CUAL PARTE EN 0 HASTA LA CANTIDAD DE ELEMENTOS QUE TENGA EL ARREGLO (.LENGTH), VAMOS A SUMAR TODAS LAS NOTAS ENTRE SI PARA OBTENER LA SUMA TOTAL

//PARA QUE SEA SUMA ACULUMADORA ES NECESARIO PONER EL NOMBRE DE LA VARIABLE + LO QUE QUIERES SUMAR. NO HUBIERA SERVIDO PONER ARRELO[I] + ARREGLO I+1] XK SE HUBIERA SALIDO DEL RANGO 

// Se usa return porque el valor de la función lo necesito para después

//Crear una funcion la cual nos muestre si la nota es aprobatoria. en ese caso usamos un parametro notaAprobatoria y arregloNotas que ya estaban definidas antes pero da lo mismoporque los parametros mueren dentro de la funcion.

//funcion aprobado  usamos alumno i+1 porque en la funcion i la habiamos definido como la posicion del array, xk el alumno 1 es la posicion 0.

//en el for i < arreglonotas es xk parte de 0. si el i partiera en 1 seria <=  ? 
//parametros de las funciones son los mismos nombres q las otras, se llaman a las anteriores o nuevamente hay que crearlos ? x ejemplo en el caso del promedio

//en la primera funcion pusimos return pero es xk el resultado lo vamos a usar en la tercera pregunta del menu

//menu parte por while porqe significa que el menu se va a repetir hasta que el usuario quiera salir. y dice opcion distinto a 0 pero definimos que la opcion partia de 1

//duda console log del menú. xk solo se colocó para la opción 1?. Resulta que cuando se definió la funcion 1 psuimos un return xk ese dato se usaria en la funcion 3, entonces, la funcion 2 y 3 ya tenian su propio console.log y no fue necesario repetirlo en el menu.

//Los parametros de las funciones, en este caso tenian el mismo nombre para mantener el contexto del ejercicio pero podrñia haber tenido cualquier nombre, PERO en el momento de llaamr a la funcion, es importante llamar al parametro que estabas usando (enn algunos casos eran constantes definidas al inicio) 

/*
const notas = [];
const notaAprobatoria = 4.0;

let cantAlumnos = parseInt(prompt("Ingrese numero de alumnos:"));

for(let i=1; i <= cantAlumnos; i++){
  let notaAlumno=0;

  do{
    notaAlumno = parseFloat(prompt("Ingrese nota de Alumno " + i + ": "));
  }while(notaAlumno>7 || notaAlumno<1);
    notas.push(notaAlumno);
    }

function promedioNotas(arregloNotas){
  let suma = 0;
  for(let i = 0; i< arregloNotas.length; i++){
    suma = suma + arregloNotas[i];
  }
  return suma/arregloNotas.length;
}


for (let i = 0; i < arregloNotas.length; i++){
  
}

*/

// voy a empezar de cero yo sola
//

const conjunto_notas = []

let cantidad_alumnos = (parseInt(prompt("Ingrese número de alumnos: ")));

//*********************en el for los parametros se separan con ; *************************

for (let i=1; i <= cantidad_alumnos; i++){

  do{
  notas = (parseInt(prompt("Ingrese nota de alumno número " + i + ": ")));
    
//while no requiere corchetes
  }while(notas >7 || notas <1);
  
  }





