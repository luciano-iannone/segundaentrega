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
        nombreProducto: "Mouse HyperX",
        precio: 6300
    },
    {
        id: 4,
        nombreProducto: "Mouse logitech",
        precio: 5400
    },
    {
        id: 5,
        nombreProducto: "Mouse Corsair",
        precio: 7500
    },
]

let carrito = []
let producto;

function buscarProducto () {
    let seleccion = prompt ("ingrese el nombre del producto que desea agregar al carrito: mouse redragon, mouse razer, mouse hyperX, mouse logitech, mouse corsair.")
    producto = productosMouse.find((p) => p.nombreProducto.toLowerCase () == seleccion.toLowerCase())
}