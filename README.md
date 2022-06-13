## Table of Contents
1. [Información general](#Información-general)
2. [Tecnológias](#Tecnológias)
3. [Descripción de los métodos](#Descripción-de-los-métodos)
4. [Collaboration](#Colaboraciones)
5. [Preguntas frecuentes](#Preguntas)
### Información general
***
Este es mi primer proyecto dentro de la empresa Finaktiva como aprendiz de T.I, el proyecto fue propuesto por nuestra team leader Melissa Tejada, su propósito principal es que mediante este ejercicio nos posibilite hacer un acercamiento de lo que hace un desarrollador dentro de la mencionada empresa.

La funcionalidad general de este proyecto es ser un gestor de números, que proveída una colección de números, el programa tenga la capacidad de las siguientes funciones:
* Ordenar de mayor a menor.
* Ordenar de menor a mayor.
* Sumar todos los números de la colección.
* Multiplicar cada número por sí mismo. 

### Screenshot
![Image text](https://github.com/danieldev128/formacion-finaktiva-aprendiz-it/blob/master/WireFrames/PagCalculador.png)
## Tecnológias
***
Lista de tecnologías usadas:
* [HTML](https://example.com): Version 5.3 
* [CSS](https://example.com): Version 3
* [JavaScript](https://example.com): Version ECMAScript 2021 
## Descripción de los métodos
***
* **Agregar**: Este método su funcion es agregar los números que el usuario debe de insertar, utilizando el DOM de HTML5 asignamos un ID a un elemento input, y con Javascript agregamos los números por medio de un arreglo, entonces volviendo a lo que compete este método declaré una variable número donde se guardará el número agregado, se hace la validacion mediante una sentencia condicional `` if ``.  y se asegura si la cadena está vacía y lanza un alert de indicandole al usuario de que debe de ingresar un número, en caso contrario mediante método ``push`` propio de JavaScript permite agregar el dato al array declarado al inicio del programa, y por ultimo lanza un alert de que el número fué agregado correctamente.

* **ImprimirInput**: Este método imprime los numéros agregados por el usuario hasta el momento, sin aplicarle algún tipo de ordenamiento, el contenido del método es que se declara una variable  "resultado" vacía y mediante una sentencia repetitiva ``for.. of``. se recorre el arreglo y en cada iteracion agregará el número a la variable que estaba vacía al prinpio del método guardando así cada número, despues esta variable se envia al DOM del documento HTML.

* **imprimirLabel**: Este método solo es invocado por los métodos siguientes, solo imprimirá si se le hace algún procesamiento al array, este método no tiene parametros de entrada, su cuerpo consiste en primera instancia limpiar el label del DOM html5, depúes se declara una variable resultado vacía, y mediante un ``for()``. se agrega cada número a la variable declarada al principio del método, una vez recorrido el arreglo envía la variable resultado al DOM especificamente al elemento label on ID salida datos

* **Ordenar de mayor a menor**: Se usa el método propio de JavaScript  ``array.sort`` que mediante una fúncion de comparacion ordena el el arreglo 
El método ``sort()`` puede ordenar valores negativos, cero y positivos en el orden correcto. Cuando compara dos valores, los envía a nuestra función de comparación y luego ordena los valores de acuerdo al resultado devuelto.

    Si el resultado es negativo, a se ordena antes que b.
    Si el resultado es positivo, b se ordena antes de a.
    Si el resultado es 0, nada cambia.

* **Ordenar de menor a mayor**: Se usa el método sort de forma inversa es decir `` numeros.sort(function(a, b){return b - a}); // --> 23, 12, 3 .``

* **Sumar todos los números de la colección**: Este método limpia el label con el ID de "salidaDatos" del DOM, luego se declara una variable acumuladora sumaNumeros con valor incial "0" luego mediante un for se recorre todo el arreglo y se hace el incremento a la variable sumaNumeros despúes de recorrido el arreglo  se envía la variable sumaNumeros al label salidaDatos.

* **Multiplicar cada número por sí mismo**: Este método resetea el elemento del DOM "salidaDatos", luego de eso declara un arreglo auxiliar que luego sera iterado por un ``for`` y con el mismo índice del se efectúa la multiplicación por sí mismo del arreglo global llamado "Datos" y esta operacion se guarda en el arreglo auxiliar.
luego se declara otra iteracion para imprimir cada uno de los elementos del arreglo auxiliar, que daría como resultado cada número multiplicado por sí mismo.

```

```

La Aplicación web puede ser procesada por Navegadores que soporte las tecnológias mencionadas anteriormente.
## Colaboraciones
***
Nuestro proyecto es un paso pequeño paso hacia la profesionalizacion, acepto donaciones para los practicantes de finaktiva.
> La motivación nos impulsa a comenzar y el hábito nos permite continuar - JIM RYUN
## Preguntas
***
Lista frecuente de preguntas
1. **This is a question in bold**
Answer of the first question with _italic words_. 
2. __Second question in bold__ 
To answer this question we use an unordered list:
* First point
* Second Point
* Third point
3. **Third question in bold**
Answer of the third question with *italic words*.
4. **Fourth question in bold**
| Headline 1 in the tablehead | Headline 2 in the tablehead | Headline 3 in the tablehead |
|:--------------|:-------------:|--------------:|
| text-align left | text-align center | text-align right |