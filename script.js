/*Conversión de edad: Haz un programa que funcione de la 
siguiente forma:
-El programa nos pregunta nuestro nombre
-El programa da como resultado nuestro nombre y a continuación los días que hemos vivido hasta
el momento (deberás multiplicar la edad por 365)*/

function nombreEdad(mostrar){
	var nombre=prompt ("Hola, ¿cuál es tu nombre?");
	var edad=prompt ("¿Qué edad tienes?");
	var diasVividos= edad*365;

	return diasVividos;	
}

/*Área del circulo: Haz un programa que sirva para calcular el área
del circulo */

function areaCirculo(a){
	var a=prompt ("Ingresa radio del circulo")
	var resultado= Math.PI * Math.pow(a,2);

	return resultado;

  }
}

/*Tablas de multiplicar:Construir la tabla de multiplicar de un número 
ingresado por teclado, partiendo desde cero*/

var tablaMultiplicar=prompt ("Ingresar número");
var resultado=tablaMultiplicar*i;

for (var i=0; i<=12;i++){

	return resultado;
}

/*Operaciones Matemáticas:Pedir dos números y después realizar
las siguientes operaciones:
-Si el primer número es mayor que el segundo, sumarlos y restarlos.
-Si los dos números son iguales, mandar una alerta indicando eso.
-Sino multiplicarlos y dividirlos*/

function operacionesMatematicas (primerNumero,segundoNumero){
	var primerNumero=prompt ("Ingrese un número");
	var segundoNumero=prompt ("Ingrese un número");

	if(primerNumero>segundoNumero){
		return (primerNumero+segundoNumero,primerNumero-segundoNumero)
	}else if (primerNumero==segundoNumero){
		alert("Los dos números ingresados son iguales")
	}else{
		return (primerNumero*segundoNumero,primerNumero%segundoNumero)
	}
}

/*Traduciendo palabras:Solicitar el ingreso alguna de estas palabras (casa,mesa,perro,gato)luego mostrar la palabra
traducida en inglés.Es decir, si se ingresa "casa" debemos mostrar el texto "house"en la página. Realizar este ejercicio con la estructura switch */

var palabraEspañol= prompt("Elije una de estas palabras:casa,mesa,perro,gato");
switch (palabraEspañol){
	case ("casa"):
	  alert ("house");
	  break;
	case ("mesa"):
	  alert ("table");
	  break;
	case ("perro"):
	  alert ("dog");
	  break;
	case("gato"):
	  alert ("cat");
	  break;
}

/*Ejemplos condicionales: 
Ejercicio #1:Suma 10 números ciclo while; se requiere un algoritmo para obtner la suma de diez cantidades mediante la 
utilización de un ciclo "while",realice el diagrama de flujo y pseudocodigo. */

Inicio
Pedir número "Ingrese número"
Ingresar número, guardar en cantidades
Repetir en tanto cantidades<10
Sumar cantidades, guardar en resultado
Imprimir resultado
Terminar

/*Promedio de personas: Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas, cuyo número de miembros se desconoce, el ciclo debe efectuarse siempre
y cuando se tenga una estatura registrada.
Realice diagrama de flujo y el pseudocodigo utilizando el ciclo apropiado*/

Inicio
Registrar estatura de n personas
Ingresar estatura, guardar en estatura
Si estatura>0
Sumar estatura y dividir por n personas
Guardar en promedio
Imprimir promedio
Terminar



/*Números pares del 0-100:Realice un algoritmo para generar e imprimir los números pares que se encuentran entre 0 y 100.
Realice diagrama de flujo y el pseudocodigo utilizando el ciclo apropiado*/

Inicio
Ingresar número desde 0 y hasta 100
Guardar en n
Siempre que n sea divisible por 2
Imprimir n
Terminar

/*Cubo y Cuarta de un Número:Leer 10 Números y obtener su cubo y su cuarta*/

Inicio
Leer Número guardar en n
Repetir hasta que n<=10
Cubo número=n*n*n
Cuarta=cubo*n
Imprimir Cubo y cuarta
Terminar

/*Elevar un numero entero a la "N" potencia:realizar un diagrama de flujo y pseudocodigo que permita elevar un número entero ingresado por teclado a una potecia dada.*/

Inicio
Definir exponente,base,resultado como Entero
Escribir "Ingrese Base"
Leer base
Escribir "Ingrese Exponente"
Leer exponente
Resultado=base^exponente
Imprimir "El resultado es "+ resultado
Terminar










