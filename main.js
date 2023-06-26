/* let nombres=[];

function agregarNombre(){

    let nombre = prompt("ingrese nombre") 
    nombres.push(nombre);
    console.log("nombre:"+ nombre);
}

function mostrarNombres(){
    console.log("lista de nombres");
    nombres.forEach(function(nombre, index){
     console.log(index + 1 + " , "+ nombre)

    });
    
}

function buscarNombre(nombre){
    var index= nombres.indexOf(nombre);
    if(index !== -1){
        console.log("nombre en la posicion"+ (index+1)+" : "+ nombre );
    }
}

 function eliminarNombre(nombre){
    var index = nombres.indexOf(nombre);
    if( index !== -1){
        nombres.splice(index, 1)
        console.log("nombre eliminado:"+ nombre);
    }else{
        console.log("nombre no encontrado:"+ nombre);
    }

} 

agregarNombre();
agregarNombre();

mostrarNombres();

eliminarNombre("carlos");

mostrarNombres();

agregarNombre();

 */