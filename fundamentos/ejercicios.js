//1
function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo); //Para incluir el minimo y el maximo
}

//2
function adivina(){
    numIntentos = 0;
    numero = aleatorio(0, 100);
    while(numIntentos < 10){
        numIntentos ++;
        intento = prompt("Introduzca un número entre el 0 y el 100: ");
        if(intento == numero) {
            alert("Enhorabuena, has acertado!")
            return numero;
        } else if(intento < numero) {
            alert("El número a adivinar es mayor que el número proporcionado, inténtelo de nuevo")
        } else {
            alert("El número a adivinar es menor que el número proporcionado, inténtelo de nuevo")
        }
    }
    if(numIntentos == 10) {
        alert("Has superado el máximo número de intentos permitido, el número correcto era: " + numero)
    }
}

//3
function array(numElementos, numInicial){
    array = new Array(numElementos);
    for(i = 0; i < array.length; i++) {
        array[i] = numInicial + i;
    }
    return array;
}

//4
function primo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
}

function primos(numPrimos) {
    c = numPrimos * 10;
    var numerosPrimos = [];
    var array = [];
    for (j=2 ; j < c; j++) {
        if (primo(j)) {
          numerosPrimos.push(j);
        }
      
    }

    for(i = 0; i < numPrimos; i++) {
            array[i] = numerosPrimos[i];
    }

    return array;
}

//5
function validarNIF(nif){
    if(nif.length != 9) {
        return alert("El nif proporcionado es inválido");
    }
    for(i = 0; i < 9; i++){
        if(parseInt(nif[i]) == NaN){
            return alert("El nif proporcionado es inválido");
        }
    }
    if(nif[8].toUpperCase().charCodeAt(0) < 64 || nif[8].toUpperCase().charCodeAt(0) > 91) {
        return alert("El nif proporcionado es inválido");
    }
    return alert("Es válido");
}

//6
function palindromo(cadena){
    var cadenaReves = cadena.split("").reverse().join("");

    if(cadena.replace(/ /g, "").toLowerCase() == cadenaReves.replace(/ /g, "").toLowerCase()) {
        alert("Es un palíndromo")
    } else {
        alert("No es un palíndromo")
    }
}