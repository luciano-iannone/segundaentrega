let productosMouse = [
    {
        id: 1,
        nombreProducto: "Mouse redragon",
        precio: 5000
    },
    {
        id: 2,
        nombreProducto: "Mouse razer",
        precio: 8700
    },
    {
        id: 3,
        nombreProducto: "Mouse hyperX",
        precio: 6300
    },
    {
        id: 4,
        nombreProducto: "Mouse logitech",
        precio: 5400
    },
    {
        id: 5,
        nombreProducto: "Mouse corsair",
        precio: 7500
    },
]

let carritoDeCompras = []
let producto;

function buscarProducto () {
    let seleccion = prompt("ingrese el nombre del producto que desea agregar al carrito: mouse redragon, mouse razer, mouse hyperX, mouse logitech, mouse corsair.")
    producto = productosMouse.find((p) => p.nombreProducto.toLowerCase () == seleccion.toLowerCase())
}


function añadirCarrito () {
    if (producto) {
        let cantidad = parseInt(prompt("ingrese la cantidad que desea seleccionar:"))
        carritoDeCompras.push({
            cantidad: cantidad,
            producto: producto.nombreProducto,
            subtotal: producto.precio * cantidad
        })
    }else{
        alert("El producto seleccionado no existe, vuelva a seleccionar un producto existente.")
    }
}

function confirmarSeleccion () {
    while (true) {
        buscarProducto()
        añadirCarrito()
        if (!confirm("¿Desea seguir comprando?")) {
            break;
        }
    }
}

function calcularTotalCompra () {
    console.log("carrito de compras: ")
    carritoDeCompras.forEach ((item) => {
        console.log(`- ${item.cantidad} ${item.producto} : ${item.subtotal}`) 
    })
    let total = carritoDeCompras.reduce ((acc, item) => acc + item.subtotal, 0)
    console.log (`total a pagar: ${total}`)
}

function vaciarCarrito () {
    carrito = []
    console.log("El carrito esta vacio")

}

confirmarSeleccion()

if (carritoDeCompras.length > 0) {
    if (confirm("¿quieres vaciar el carrito?")) {
        vaciarCarrito()
    }
}

calcularTotalCompra()