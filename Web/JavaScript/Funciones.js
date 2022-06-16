let datos =[]
let listaDeNumeros2 = document.querySelector(".ulSalida");

function agregar(){
    
    let numero = document.getElementById('numero').value;


    if(numero ==''){


        alert('Debe ingresar un número')
    }else{

        datos.push(numero);
        let listaDeNumeros = document.querySelector("ul");
        const li = document.createElement('li');
        li.textContent = numero;
        listaDeNumeros.appendChild(li);

        /*
        datos.forEach(item =>{
        const li = document.createElement('li');
        li.textContent = item;
        listaDeNumeros.appendChild(li);     

            });
        */
        alert('Número agregado correctamente');
        document.getElementById('numero').value = "";    

    }
    
    
    
    


}


function imprimirInput(){

    let listaDeNumeros = document.querySelector("ul");
    
    datos.forEach(item =>{
        const li = document.createElement('li');
        li.textContent = item;
        listaDeNumeros.appendChild(li);
    });
   

}

function imprimirLabel(){



     
    //document.getElementById('salidaDatos').innerHTML = "";

    //let resultado = "|"
    
        

        listaDeNumeros2.innerHTML ="";
        
        
/*
    for(i = 0 ; i < datos.length; i++){

        resultado += datos[i] + '|';
    }

    
*/
    datos.forEach(item =>{
    const li = document.createElement('li');
    li.textContent = item;
    listaDeNumeros2.appendChild(li);
    });

    //document.getElementById('salidaDatos').innerHTML = resultado;

}




function ordenarMayorMenor(){
    document.getElementById('salidaDatos').innerHTML = "";
    listaDeNumeros2.innerHTML = "";
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
    listaDeNumeros2.innerHTML = "";
    document.getElementById('salidaDatos').innerHTML = "";
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
    listaDeNumeros2.innerHTML ="";

   let sumaNumeros = 0;


    for(i = 0; i<datos.length; i++){

        sumaNumeros += parseFloat(datos[i])

    }

    document.getElementById('salidaDatos').innerHTML = sumaNumeros;




}

function multiplicacionPorNum(){
    listaDeNumeros2.innerHTML ="";

    document.getElementById('salidaDatos').innerHTML = "";

    let multiplacionArray = [];

    for(i = 0; i < datos.length; i++){

        multiplacionArray[i] = parseFloat(datos[i]) * parseFloat(datos[i]);


    }

    multiplacionArray.forEach(item =>{
        const li = document.createElement('li');
        li.textContent = item;
        listaDeNumeros2.appendChild(li);
        });
}







function botonAccion(){
    if(datos.length !== 0){
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


    }else{

        alert("Debe de ingresar una opcion!")
    }
}else{

    alert("Debe de ingresar un número");
}

}