let cant = document.getElementsByClassName('cant') // tomo los valores ingresados
let select = document.getElementsByClassName('select')
let select2 = document.getElementsByClassName('select2')

function compraBebida() {
    cantidad = parseInt(cant[0].value)
    bebida = parseInt(select[0].value)
    pago = parseInt(select2[0].value)
    const compraBebidas = new Carrito(cantidad,pago,bebida); // genero instancia de objeto Carrito
    let res=compraBebidas.cotizarCompra() // llamo a la funcion de cotizar compra
    let salida = "el costo de la compra es de $"+ res 
    alert(salida)
}


