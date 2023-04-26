let nombreUsuario = prompt("Ingresa tu nombre:")
let direccion = prompt("Ingresa tu dirección:")
let pass = "123"
let cantidad
let precioFinal 
let login = false

for (let i = 2; i >= 0; i--) {   
    let ingresoPass = prompt(`Ingresa la contraseña \nTienes ${i + 1} intentos restantes`)

    if (pass === ingresoPass) {
        alert(`✅ Has iniciado sesión correctamente.`)
     login = true
     break
   // }else{
       // alert("⛔ Error al ingresar la contraseña")
    }
    alert(`⛔Contraseña incorrecta`)
}

function Celular(precio, stock){   
    this.precio = precio;
    this.stock = stock;
}



if (login) {
    alert(`¡Bienvenido/a ${nombreUsuario} a nuestro negocio de celulares!`)
    let saldo = 200000
    const samsungS23 = new Celular (340000, 5)
    const iphone14 = new Celular (550000, 1)
    const motoEdge30 = new Celular(150000, 7)

    let opcion = prompt(
        `Elegí una opción: (Saldo: $${saldo}) \n1-Samsung S23 $${samsungS23.precio}, Stock: ${samsungS23.stock} \n2-iPhone 14 $${iphone14.precio}, Stock: ${iphone14.stock} \n3-Moto Edge30 $${motoEdge30.precio}, Stock: ${motoEdge30.stock} \n4-Depositar\nPresiona X para finalizar`)

   

   while(opcion != "x"){ 
    switch (opcion) {
    case "1":
        cantidad = parseInt(prompt(`Ingresa la cantidad a comprar`))
        if (cantidad > 0 && cantidad <= samsungS23.stock) {
            precioFinal = samsungS23.precio * cantidad

            alert(`El precio final es: $${precioFinal} `)
            alert("Procesando...")
            if (saldo >= precioFinal) {
                saldo = saldo - precioFinal
                samsungS23.stock = samsungS23.stock - cantidad

                alert(`¡Muchas gracias por comprar ${cantidad} Samsung S23, te llegarán a la brevedad a ${direccion}!`)
                alert(`Tu saldo es: $${saldo}\nVolviendo al menú principal...`)
            }else{
                alert(`⛔Saldo insuficiente, tu saldo es $${saldo}`)
            }       
        }else{
            alert(`Actualmente contamos con: ${samsungS23.stock} unidades \nNo es posible comprar cero (0) unidades\nVolviendo al menú principal...`)
        }
              
        
        break 
        
        case "2":
            cantidad = parseInt(prompt(`Ingresa la cantidad a comprar:`))

            if (cantidad  > 0 && cantidad <= iphone14.stock) {   
                precioFinal = iphone14.precio * cantidad            

        alert(`El precio final es: $${precioFinal} `)
        alert("Procesando...")
        if (saldo >= precioFinal) {

            saldo = saldo - precioFinal
            iphone14.stock = iphone14.stock - cantidad
            alert(`¡Muchas gracias por comprar ${cantidad} iPhone14, te llegarán a la brevedad a ${direccion}!`)
            alert(`Tu saldo es: $${saldo}\nVolviendo al menú principal...`)
        }else{
            alert(`⛔Saldo insuficiente, tu saldo es $${saldo}`)
        }       
    }else{
        alert(`Actualmente contamos con: ${iphone14.stock} unidades \nNo es posible comprar cero (0) unidades \nVolviendo al menú principal...`)
    }
        break

        case "3":
            cantidad = parseInt(prompt(`Ingresa la cantidad a comprar:`))

            if (cantidad  > 0 && cantidad <= motoEdge30.stock) {  
                precioFinal = motoEdge30.precio * cantidad              

        alert(`El precio final es: $${precioFinal} `)
        alert("Procesando...")
        if (saldo >= precioFinal) {

            saldo = saldo - precioFinal
            motoEdge30.stock = motoEdge30.stock - cantidad
            alert(`¡Muchas gracias por comprar ${cantidad} MotoEdge30, te llegarán a la brevedad a ${direccion}!`)
            alert(`Tu saldo es: $${saldo}\nVolviendo al menú principal...`)
        }else{
            alert(`⛔Saldo insuficiente, tu saldo es $${saldo}`)
        }       
    }else{
        alert(`Actualmente contamos con: ${motoEdge30.stock} unidades \nNo es posible comprar cero (0) unidades \nVolviendo al menú principal...`)
    }
        break       

        case "4":

        let deposito = parseInt(prompt("Ingresa el monto a depositar"));
        saldo = saldo + deposito;
        alert("Depósito exitoso. Tu saldo es $" + saldo);
       
        break;
           
    default: 
        alert(`Opción no válida`)
        break;
}
opcion = prompt(
    `Elegí una opción: (Saldo: $${saldo}) \n1-Samsung S23 $${samsungS23.precio}, Stock: ${samsungS23.stock} \n2-iPhone 14 $${iphone14.precio}, Stock: ${iphone14.stock} \n3-Moto Edge30 $${motoEdge30.precio}, Stock: ${motoEdge30.stock} \n4-Depositar\nPresiona X para finalizar`)
 
}   
alert("👋  Gracias por confiar en nosotros");
}else{

}