class Carrito { 
    constructor(cantidad,pago,bebida){ // Genero el constructor con los parametros recibidos
        this.cantidad=cantidad
        this.pago=pago
        this.bebida=bebida
        this.carrito = []
        this.total = 0
    }
    agregarProducto(){
        let resultado = 0
        let item = []; // item de producto agregado
        const busqueda = bebidas.find(bebidas=>bebidas.id ==this.bebida)
        resultado = busqueda.precio * this.cantidad
        item.push(busqueda.producto)
        item.push(this.cantidad)
        item.push(resultado)
        this.carrito.push(item) // agrego item al carrito
        let tabla = "<thead><tr><th>Producto</th><th>Cantidad</th><th>Total</th></thead>" // genero tabla con el carrito
        for(let i=0;i<this.carrito.length ; i++){
            tabla +=`<tr><td>${this.carrito[i][0]}</td><td>${this.carrito[i][1]}</td>><td>${this.carrito[i][2]}</td></tr>`
        }
        this.total += resultado
        tabla +=`<tr><td></td><td></td>><td>${this.total}</td></tr>`
        document.getElementById("carrito").innerHTML = tabla //la envio al HTML
    }
    cerrarCompra(){
        let mensajepago = ""
        const cierre = descuentos.find(descuentos=>descuentos.id ==this.pago)
        this.total = this.total * cierre.descuento
        mensajepago = cierre.mensaje + "El total de la compra es $"+ this.total //genero el mensaje de salida que ira al alert
        this.total=0 // reinicio los valores a 0 para nueva compra
        this.carrito=[]
        document.getElementById("carrito").innerHTML = ""
        return mensajepago
    }
}

