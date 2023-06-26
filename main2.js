let nombres = []

function ingresar() {

    let nombre = prompt("ingrese el nombre");
    nombres.push(nombre);
}

function mostrar() {
    nombres.forEach(nombre => {
        console.log(nombre);


    });
}

function eliminar() {
    nombres.pop();

}

function actualizar() {
    nombres.splice(2, 0, "kiwi", "limon")
}

let opcion;
console.log("asdasd");

do {
    console.log("MENU DE OPCIONES");
    console.log("1. Ingresar nombre");
    console.log("2. Mostrar nombres");


    console.log("3. Eliminar último nombre");


    console.log("4. Actualizar nombres");


    console.log("5. Salir");

    opcion =     parseInt(prompt("Seleccione una opción"));






    switch (opcion) {
        case 1:
            ingresar();


            break;


        case 2:


            mostrar();


            break;


        case 3:
            eliminar();


            break;


        case 4:
            actualizar();
            break;


        case 5:


            console.log("Salir del programa");
            break;
        default:


            console.log("opcion incorrecta");
    }
}while (opcion !== 5);



/* ingresar();
ingresar();
ingresar();

mostrar();
actualizar();
mostrar();

eliminar();
mostrar(); */