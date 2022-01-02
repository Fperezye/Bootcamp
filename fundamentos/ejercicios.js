//1
function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo); //Para incluir el minimo y el maximo
}

//2
function adivina(){
    numIntentos = 0;
    numero = aleatorio(0, 100);
    while(numIntentos < 10){
        intento = prompt("Introduzca un número entre el 0 y el 100: ");
        if(isNaN(parseInt(intento)) || intento > 100 || intento < 0) {
            alert("El valor introducido no es valido")
        } else {
            numIntentos ++;
            if(intento == numero) {
                alert("Enhorabuena, has acertado!")
                return numero;
            } else if(intento < numero) {
                alert("El número a adivinar es mayor que el número proporcionado, inténtelo de nuevo")
            } else {
                alert("El número a adivinar es menor que el número proporcionado, inténtelo de nuevo")
            }
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
    let c = numPrimos * 10;
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

//7
function AdivinaElNumeroConstructor(){
    this.numero = aleatorio(0, 100);
    this.acierto = false;
    this.numIntentos = 0;
}

//8
class AdivinaElNumero{
    constructor() {
            this.numero = aleatorio(0, 100);
            this.acierto = false;
            this.numIntentos = 0;
    }
    intentar (intento) {
        if(isNaN(parseInt(intento)) || intento > 100 || intento < 0) {
            alert("El valor introducido no es valido")
        } else {
            if(this.numIntentos == 10) {
                alert("Has llegado al límite de intentos");
            } else if(this.acierto == true) {
                alert("Ya has acertado este numero")
            } else {
                this.numIntentos ++;
                if(intento == this.numero) {
                    this.acierto = true;
                    alert("Enhorabuena, has acertado!")
                    return this.numero;
                } else if(intento < this.numero) {
                    alert("El número a adivinar es mayor que el número proporcionado, inténtelo de nuevo")
                } else {
                    alert("El número a adivinar es menor que el número proporcionado, inténtelo de nuevo")
                }
            }
        }
    }
}