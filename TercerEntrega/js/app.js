let cant = document.getElementsByClassName('cant') // tomo los valores ingresados
let select = document.getElementsByClassName('select')
let select2 = document.getElementsByClassName('select2')


let cantidad = 0 
let pago = 0
let bebida = 0

const compraBebidas = new Carrito(cantidad,pago,bebida); // inicializo carrito

function compraBebida() {
    compraBebidas.cantidad = parseInt(cant[0].value) //envio valores de cantidad y bebida seleccionada
    compraBebidas.bebida = parseInt(select[0].value)
    compraBebidas.agregarProducto() // llamo a la funcion agregar producto
}

function finalizarCompra(){
    compraBebidas.pago = parseInt(select2[0].value)
    let res = compraBebidas.cerrarCompra()// llamo a la funcion de cerrar compra con el pago correspondiente
    alert (res)
}


