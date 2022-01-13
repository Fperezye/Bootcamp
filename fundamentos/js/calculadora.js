function Calculadora(fnPantalla){
    if (fnPantalla && typeof (fnPantalla) !== 'function')
		throw new Error('Falta la función para pintar en la pantalla')
    let ref = this;
    let resultado = 0;
    let operation = 0;
    let primeroEnPantalla = true;
    let coma = false;
    let pantalla = '0';
    let limpiar = false;
    ref.pantalla = '0';
    ref.onPantallaChange = fnPantalla;

    function pintaPantalla() {
		ref.pantalla = pantalla;
		if (typeof(ref.onPantallaChange) !== 'function') return;
		ref.onPantallaChange(pantalla);
	}
    function igualar() {
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
        resultado = pantalla = String(oculto);
        pintaPantalla();
        oculto = 0;
        coma = false;
        operation = 0;
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
    }

    ref.Operation = function (value){
            if (value == "+") {
                igualar();
                oculto = resultado;
                operation = "+";
                primeroEnPantalla = true;
                coma = false;
            } else if (value == "-") {
                igualar();
                oculto = resultado;
                operation = "-";
                primeroEnPantalla = true;
                coma = false;
            } else if (value == "*") {
                igualar();
                oculto = resultado;
                operation = "*";
                primeroEnPantalla = true;
                coma = false;
            } else if (value == "/") {
                igualar();
                oculto = resultado;
                operation = "/";
                primeroEnPantalla = true;
                coma = false;
            } else if (value == "=") {
                igualar();
            } else if (value == "C") {
                pantalla = "";
                resultado = 0;
                operation = 0;
                oculto = 0;
                primeroEnPantalla = true;
                coma = false;
                pintaPantalla();
            } else if (value == ",") {
                if (!coma) {
                    if(primeroEnPantalla){
                        pantalla = "0.";
                        resultado = "0.";
                        primeroEnPantalla = false;
                        pintaPantalla();
                    } else {
                        pantalla += ".";
                        resultado += ".";
                        coma = true;
                        primeroEnPantalla = false;
                        pintaPantalla();
                    }  
                }
            } else if (value == "+-") {
                resultado = -resultado;
                pantalla = pantalla = (-pantalla).toString();;
                pintaPantalla();
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
            }
        }  
}
