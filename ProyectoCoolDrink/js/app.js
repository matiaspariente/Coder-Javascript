let cantidad = 0 
let pago = 0
let bebida = 0

const compraBebidas = new Carrito(cantidad,pago,bebida); // inicializo carrito

function compraBebida(bebida) {
    let verificoCarrito = JSON.parse(localStorage.getItem('Carrito'))
    if(verificoCarrito) compraBebidas.carrito = verificoCarrito // Verifico si ya tenia carrito iniciado, para no perderlo al reiniciar la pagina.
    compraBebidas.bebida = bebida
    compraBebidas.cantidad = 1
    compraBebidas.agregarProducto() // llamo a la funcion agregar producto
}

function finalizarCompra(){
    compraBebidas.total = parseInt(JSON.parse(localStorage.getItem('Total'))) // tomo el total del localstorage
    if(!compraBebidas.total){ // si no tengo un total es por que no hay producto, lo informo en un alert
        alert("Debe agregar productos para finalizar la compra")
    } else {   
    compraBebidas.pago = parseInt(select.value) 
    let res = compraBebidas.cerrarCompra()// llamo a la funcion de cerrar compra con el pago correspondiente
    alert (res)
    }
}
