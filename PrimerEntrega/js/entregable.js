// Autor: Matias Pariente
// El algoritmo consiste en ingresar por el prompt un mes y te devuelve como alerta la cantidad de dias que posee el mes
// Se utiliza el ciclo while con condicion de salida de ingreso de "salir" por el prompt. Para las comparaciones de los meses se usa if con or como condicion.

let mesIngresado = prompt ("Ingrese Mes (en minusculas) para finalizar ingresa salir")
while(mesIngresado!="salir"){
    if(mesIngresado=="abril"||mesIngresado=="junio"||mesIngresado=="septiembre"||mesIngresado=="noviembre"){
        alert("el mes "+mesIngresado+" tiene 30 dias")
    } else if(mesIngresado=="febrero"){
        alert("el mes "+mesIngresado+" tiene 28 dias")
    } else {
        alert("el mes "+mesIngresado+" tiene 31 dias")
    }
    mesIngresado = prompt ("Ingrese Mes (en minusculas) para finalizar ingresa salir")
}
alert("Ha ingresado salir, finaliza el programa")
