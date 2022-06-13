let datos =[]







function agregar(){
    
    let numero = document.getElementById('numero').value;


    if(numero ==''){


        alert('Debe ingresar un número')
    }else{

        datos.push(numero);

    alert('Número agregado correctamente')
    document.getElementById('numero').value ="";
    document.getElementById("numerosAgregados").placeholder = "Click aquí para ver números agregados";
    }
    
    
    
    


}


function imprimirInput(){

    let resultado = "|";
    
    if(datos.length === 0){

        document.getElementById("numerosAgregados").placeholder = "No hay nada para mostrar";

    }else{

        for(const dato of datos){
        
            resultado += dato + '|';
        }
    
        document.getElementById("numerosAgregados").value = resultado;

    }
    

   

}

function imprimirLabel(){

    document.getElementById('salidaDatos').innerHTML = "";

    let resultado = "|"
    

    for(i = 0 ; i < datos.length; i++){

        resultado += datos[i] + '|';
    }

    document.getElementById('salidaDatos').innerHTML = resultado;

}




function ordenarMayorMenor(){

    datos.sort(function(a, b){return b - a})
    
    /*
  let aux;
    for(i = 0; i<=datos.length ; i++){
        for(j = 0; j<datos.length - 2; j++ ){
                if(datos[j] < datos[j + 1]){

                    aux = datos[j]
                    datos[j] = datos[j + 1]
                    datos[j + 1] = aux


                }
        }
        */

    
    
    imprimirLabel();

}

function ordenarMenorMayor(){

    let aux;
    datos.sort(function(a, b){return a - b})

    /*

    for(i = 0; i < datos.length; i++){
        for(j = 0; j < datos.length - 2; j++ ){
                if(datos[j] > datos[j + 1]){

                    aux = datos[j]
                    datos[j] = datos[j + 1]
                    datos[j + 1] = aux


                }
        }

    }
    */

    imprimirLabel();

}

function sumarNumeros(){

    document.getElementById('salidaDatos').innerHTML = "";

   let sumaNumeros = 0;


    for(i = 0; i<datos.length; i++){

        sumaNumeros += parseFloat(datos[i])

    }

    document.getElementById('salidaDatos').innerHTML = sumaNumeros;




}

function multiplicacionPorNum(){

    document.getElementById('salidaDatos').innerHTML = "";

    let multiplacionArray = [];

    for(i = 0; i < datos.length; i++){

        multiplacionArray[i] = parseFloat(datos[i]) * parseFloat(datos[i]);


    }

    for(i = 0; i < datos.length; i++){

        document.getElementById('salidaDatos').innerHTML += multiplacionArray[i] + ',';

    }



}







function botonAccion(){

    let numeroOp = document.querySelector('#selectorOp')
    let codigoAccion = numeroOp.options[numeroOp.selectedIndex].getAttribute('value')

    if(codigoAccion == 1){
        ordenarMayorMenor();


    }else if(codigoAccion == 2){
        ordenarMenorMayor();

    }else if(codigoAccion == 3 ){
        sumarNumeros();

    }else if(codigoAccion == 4){
        multiplicacionPorNum();


    }

}