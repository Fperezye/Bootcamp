export function Calculadora(fnPantalla){
    if (fnPantalla && typeof (fnPantalla) !== 'function')
		throw new Error('Falta la función para pintar en la pantalla')
    let ref = this;
    let resultado = '0';
    let operation = '0';
    let primeroEnPantalla = true;
    let coma = false;
    let pantalla = '0';
    let limpiar = false;
    let oculto= '0';
    ref.pantalla = '0';
    ref.onPantallaChange = fnPantalla;

    function pintaPantalla() {
		ref.pantalla = pantalla;
		if (typeof(ref.onPantallaChange) !== 'function') return;
		ref.onPantallaChange(pantalla);
	}

    ref.igualar = function() {
        limpiar = false;
        if ("+-*/=".indexOf(operation) == -1) return;
        let operando = parseFloat(resultado);
        oculto = parseFloat(oculto);
        switch (operation) {
            case "+":
                oculto += operando;
                break;
            case "-":
                oculto -= operando;
                break;
            case "*":
                oculto *= operando;
                break;
            case "/":
                oculto /= operando;
                break;
        }
        resultado = pantalla = String(parseFloat(oculto.toPrecision(15)));
        pintaPantalla();
        oculto = '0';
        coma = false;
        operation = '0';
        primeroEnPantalla = true;
    }

    ref.Numb = function(value) {
        if (typeof (value) !== 'string')
			value = value.toString();
        if (resultado == "0" || primeroEnPantalla) {
            resultado = value;
            pantalla = value;
            limpiar = true;
        } else {
            resultado += value;
            pantalla += value;
            limpiar = true;
        }
        primeroEnPantalla = false;
        pintaPantalla();
        return value;
    }

    ref.ValorActual = function() {
        return resultado;
    }

    ref.Operation = function (value){
            if (value == "+") {
                ref.igualar();
                oculto = resultado;
                operation = "+";
                primeroEnPantalla = true;
                coma = false;
                return value;
            } else if (value == "-") {
                ref.igualar();
                oculto = resultado;
                operation = "-";
                primeroEnPantalla = true;
                coma = false;
                return value;
            } else if (value == "*") {
                ref.igualar();
                oculto = resultado;
                operation = "*";
                primeroEnPantalla = true;
                coma = false;
                return value;
            } else if (value == "/") {
                ref.igualar();
                oculto = resultado;
                operation = "/";
                primeroEnPantalla = true;
                coma = false;
                return value;
            } else if (value == "=") {
                ref.igualar();
                return value;
            } else if (value == "C") {
                pantalla = "";
                resultado = '0';
                operation = '0';
                oculto = '0';
                primeroEnPantalla = true;
                coma = false;
                pintaPantalla();
                return value;
            } else if (value == ",") {
                if (!coma) {
                    if(primeroEnPantalla){
                        pantalla = "0.";
                        resultado = "0.";
                        primeroEnPantalla = false;
                        coma = true;
                        pintaPantalla();
                        return value;
                    } else {
                        pantalla += ".";
                        resultado += ".";
                        coma = true;
                        primeroEnPantalla = false;
                        pintaPantalla();
                        return value;
                    }  
                }
            } else if (value == "+-") {
                resultado = (-resultado).toString();
                pantalla = pantalla = (-pantalla).toString();
                pintaPantalla();
                return value;
            } else if (value == "Retr") {
                if(limpiar){
                    let br = resultado.substr(resultado.length - 1, resultado.length);
                    resultado = resultado.substr(0, resultado.length - 1);
                    if (resultado == "" || resultado == "-") {
                        resultado = "0";
                    }
                    if (br == ".") {
                        coma = false;
                    }
                    pantalla = resultado;
                    pintaPantalla();
                }
                return value;
            }
        }  
}
