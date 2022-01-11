//1
export function aleatorio(minimo, maximo) {
    if(minimo <= maximo) {
        return Math.floor(Math.random() * (maximo - minimo + 1) + minimo); //Para incluir el minimo y el maximo
    }
}

//2
export function adivina(){
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
export function array(numeroElementos, valorPorDefecto = "", ...resto) {
    var rslt = [];
    for (var ind = 0; ind < numeroElementos; ind++) {
        if (resto.length > ind)
            rslt[ind] = resto[ind];
        else
            rslt[ind] = valorPorDefecto;
    }
    return rslt;
}

//4
export function primo(numero) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
}

export function primos(numPrimos) {
    let c = numPrimos * 10;
    let numerosPrimos = [];
    let array = [];
    for (let j=2 ; j < c; j++) {
        if (primo(j)) {
          numerosPrimos.push(j);
        }
      
    }

    for(let i = 0; i < numPrimos; i++) {
            array[i] = numerosPrimos[i];
    }

    return array;
}

//5
export function validarNIF(nif){
    if(nif.length != 9) {
        // return alert("El nif proporcionado es inválido");
        return false;
    }
    for(let i = 0; i < 9; i++){
        if(parseInt(nif[i]) == NaN){
            // return alert("El nif proporcionado es inválido");
            return false;
        }
    }
    if(nif[8].toUpperCase().charCodeAt(0) < 64 || nif[8].toUpperCase().charCodeAt(0) > 91) {
        // return alert("El nif proporcionado es inválido");
        return false;
    }
    // return alert("Es válido");
    return true;
}

//6
export function palindromo(cadena){
    var cadenaReves = cadena.split("").reverse().join("");

    if(cadena.replace(/ /g, "").toLowerCase() == cadenaReves.replace(/ /g, "").toLowerCase()) {
        // alert("Es un palíndromo")
        return true;
    } else {
        // alert("No es un palíndromo")
        return false;
    }
}

//7
function AdivinaElNumeroConstructor(){
    this.numero = aleatorio(0, 100);
    this.acierto = false;
    this.numIntentos = 0;
    this.intentar = function(intento) {
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

//8
export class AdivinaElNumero{
    constructor() {
            this.numero = aleatorio(0, 100);
            this.acierto = false;
            this.numIntentos = 0;
    }
    intentar (intento) {
        if(isNaN(parseInt(intento)) || intento > 100 || intento < 0) {
            // document.querySelector('output').innerText = "El valor introducido no es valido";
        } else {
            if(this.numIntentos == 10) {
                // document.querySelector('output').innerText = "Has llegado al límite de intentos";
            } else if(this.acierto == true) {
                // document.querySelector('output').innerText = "Ya has acertado este numero";
            } else {
                this.numIntentos ++;
                if(intento == this.numero) {
                    this.acierto = true;
                    // document.querySelector('output').innerText = "Enhorabuena, has acertado!";
                    return this.numero;
                } else if(intento < this.numero) {
                    // document.querySelector('output').innerText = `El número a adivinar es mayor que el número proporcionado, inténtelo de nuevo. ${this.numIntentos} de 10 intentos`;
                } else {
                    // document.querySelector('output').innerText = `El número a adivinar es menor que el número proporcionado, inténtelo de nuevo. ${this.numIntentos} de 10 intentos`;
                }
            }
        }
    }
}

//Validaciones
function validMayus(text){
    if(text == text.toUpperCase()) {
        return true;
    }
    return false;
}

function validPositive(number){
    if(number == Math.abs(number)) {
        return true;
    }
    return false;
}