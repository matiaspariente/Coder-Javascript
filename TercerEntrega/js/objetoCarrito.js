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
        switch(this.bebida){ // Verifico que bebida fue ingresado
            case 1:
                resultado = this.cantidad * ValorCerveza
                item.push("Cerveza")
                break;
            case 2:
                resultado = this.cantidad * ValorAperitivo
                item.push("Aperitivo")
                break;
            case 3:
                resultado = this.cantidad * ValorVino
                item.push("Vino")
                break;
            case 4:
                resultado = this.cantidad * ValorWhisky
                item.push("Whisky")
            break;
        }
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
        if(this.pago===1){ // Verifico que tipo de pago y se aplica el descuento
            this.total = this.total * descuentoEfectivo
            mensajepago= "Se aplica 20% de descuento por pago en efectivo.\n" 
        } 
        else if (this.pago===2){
            this.total = this.total * descuentoMercadopago
            mensajepago= "Se aplica 10% de descuento por pago con Mercadopago.\n"  
        }
        mensajepago = mensajepago + "El total de la compra es $"+ this.total //genero el mensaje de salida que ira al alert
        this.total=0 // reinicio los valores a 0 para nueva compra
        this.carrito=[]
        document.getElementById("carrito").innerHTML = ""
        return mensajepago
    }
}

