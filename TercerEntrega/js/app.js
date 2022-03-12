let cant = document.getElementsByClassName('cant') // tomo los valores ingresados
let select = document.getElementsByClassName('select')
let select2 = document.getElementsByClassName('select2')


let cantidad = 0 
let pago = 0
let bebida = 0

const compraBebidas = new Carrito(cantidad,pago,bebida); // inicializo carrito

function compraBebida() {
    if(parseInt(cant[0].value)<=0){
        alert("La cantidad a Agregar debe ser mayor a 0")
    } else {
    compraBebidas.cantidad = parseInt(cant[0].value) //envio valores de cantidad y bebida seleccionada
    compraBebidas.bebida = parseInt(select[0].value)
    compraBebidas.agregarProducto() // llamo a la funcion agregar producto
    }
}

function finalizarCompra(){
    if(compraBebidas.total==0){
        alert("Debe agregar productos para finalizar la compra")
    } else {
    compraBebidas.pago = parseInt(select2[0].value)
    let res = compraBebidas.cerrarCompra()// llamo a la funcion de cerrar compra con el pago correspondiente
    alert (res)
    }
}


