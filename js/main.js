function precioFinalTranf(precioProducto) {
    let precioFinal = precioProducto * 0.9
    alert("tu total es: $" +precioFinal)
    let envio = prompt("¿incluir envío a domicilio por $1200? si/no")
        if (envio == "no") {
            alert("eligio la opcion de retiro por sucursal, gracias por su compra")
        }
        else if (envio == "si"){
            let precioConEnvio = precioFinal + costoEnvio
            alert("tu total de compra con envío es $"+precioConEnvio)
        }
        else {
            alert("comando invalido")
        }
}

function precioFinalTarj(precioProducto) {
    let precioFinal = precioProducto * 1.10
    alert("tu total es: $" +precioFinal)
    let envio = prompt("¿incluir envío a domicilio por $1200? si/no")
        if (envio == "no") {
            alert("eligio la opcion de retiro por sucursal, gracias por su compra")
        }
        else if (envio == "si"){
            let precioConEnvio = precioFinal + costoEnvio
            alert("tu total de compra con envío es $"+precioConEnvio)
        }
        else {
            alert("comando invalido")
        }
}

let costoEnvio = 1100




class Producto {
    constructor(nombre, id, precio) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
    }
}

const GPUS = []
const CPUS = []


GPUS.push(new Producto("RX 6600XT", 148, 85000))
GPUS.push(new Producto("GTX 1050TI", 149, 50000 ))
GPUS.push(new Producto("RTX 2060", 150, 99000))

CPUS.push(new Producto("i3 10100", 151, 25000))
CPUS.push(new Producto("Ryzen 5 3600", 152, 35000))
CPUS.push(new Producto("Ryzen 7 5800X", 153, 65000))


for (const GPU of GPUS) {
    alert(`ID.${GPU.id}  ${GPU.nombre}  $${GPU.precio}`)

}

for (const CPU of CPUS) {
    alert(`ID.${CPU.id}  ${CPU.nombre}  $${CPU.precio}`)
}

let hardElegido = parseInt(prompt("escriba el id del producto que desea comprar"))
const GPUELEGIDA = GPUS.find(GPU => GPU.id === hardElegido)
const CPUELEGIDO = CPUS.find(CPU => CPU.id === hardElegido)


if (isNaN(hardElegido)) {
    alert("ingrese un id válido")
}

else if (hardElegido == 148 || hardElegido == 149 || hardElegido == 150) {

    alert(`ha selecciona la placa ${GPUELEGIDA.nombre}`)
    let metodoPago = parseInt(prompt("Seleccione: \n 1. Efectivo/Transferencia (10% descuento) \n 2. Tarjeta (recargo del 10%) "))
    if (metodoPago == 1) {
        precioFinalTranf(GPUELEGIDA.precio)
        }
    else if (metodoPago ==2) {
        precioFinalTarj(GPUELEGIDA.precio)
    }
    else {
        alert("comando invalido")
    }

}

else if (hardElegido == 151 || hardElegido == 152 || hardElegido == 153) {

    alert(`ha selecciona el procesador ${CPUELEGIDO.nombre}`)
    let metodoPago = parseInt(prompt("Seleccione: \n 1. Efectivo/Transferencia (10% descuento) \n 2. Tarjeta (recargo del 10%) "))
    if (metodoPago == 1) {
        precioFinalTranf(CPUELEGIDO.precio)
        }
    else if (metodoPago ==2) {
        precioFinalTarj(CPUELEGIDO.precio)
    }
    else {
        alert("comando invalido")
    }
}
