let cant = document.getElementById('cant') // tomo los valores ingresados
let select = document.getElementById('select')
let select2 = document.getElementById('select2')

let boton = document.getElementById("btnAgregarProducto") // evento de hacer click en boton
boton.addEventListener("click",compraBebida)

let boton2 = document.getElementById("btnFinalizarCompra") // evento de hacer click en boton
boton2.addEventListener("click",finalizarCompra)

select.onchange = () => {cant.value=1}; // Si se modifica el valor de bebida a comprar se vuelve la cantidad a comprar a 1

