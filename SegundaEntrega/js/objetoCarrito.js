class Carrito { 
    constructor(cantidad,pago,bebida){ // Genero el constructor con los parametros recibidos
        this.cantidad=cantidad
        this.pago=pago
        this.bebida=bebida
    }
    cotizarCompra(){
        let resultado = 0
        switch(this.bebida){ // Verifico que bebida fue ingresado
            case 1:
                resultado = this.cantidad * ValorCerveza
                break;
            case 2:
                resultado = this.cantidad * ValorAperitivo
                break;
            case 3:
                resultado = this.cantidad * ValorVino
                break;
            case 4:
                resultado = this.cantidad * ValorWhisky
            break;
        }
        if(this.pago===1){ // Verifico que tipo de pago y se aplica el descuento
            resultado = resultado * descuentoEfectivo
        }else if (this.pago===2){
            resultado = resultado * descuentoMercadopago
        }
        return parseFloat(resultado)
    }
}

