function calculadora(area, operations, numbs){
    let resultado = 0;
    let operation = 0;
    let primeroEnPantalla = true;
    let coma = false;
    let limpiar = false;
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
        resultado = area.innerHTML = oculto;
        oculto = 0;
        coma = false;
        operation = 0;
        primeroEnPantalla = true;
    }
    numbs.forEach((button) =>
        button.addEventListener("click", (ev) => {
            if (resultado == "0" || primeroEnPantalla) {
                resultado = button.value;
                areaText.innerHTML = button.value;
                limpiar = true;
            } else {
                resultado += button.value;
                areaText.innerHTML += button.value;
                limpiar = true;
            }
            primeroEnPantalla = false;
        })
    );
    operations.forEach((button) =>
        button.addEventListener("click", (ev) => {
            if (button.value == "+") {
                igualar();
                oculto = resultado;
                operation = "+";
                primeroEnPantalla = true;
                coma = false;
            } else if (button.value == "-") {
                igualar();
                oculto = resultado;
                operation = "-";
                primeroEnPantalla = true;
                coma = false;
            } else if (button.value == "*") {
                igualar();
                oculto = resultado;
                operation = "*";
                primeroEnPantalla = true;
                coma = false;
            } else if (button.value == "/") {
                igualar();
                oculto = resultado;
                operation = "/";
                primeroEnPantalla = true;
                coma = false;
            } else if (button.value == "=") {
                igualar();
            } else if (button.value == "C") {
                areaText.innerHTML = "";
                resultado = 0;
                operation = 0;
                oculto = 0;
                primeroEnPantalla = true;
                coma = false;
            } else if (button.value == ",") {
                if (!coma) {
                    areaText.innerHTML += ".";
                    resultado += ".";
                    coma = true;
                    primeroEnPantalla = false;
                }
            } else if (button.value == "+-") {
                resultado = areaText.innerHTML = String(-parseFloat(areaText.innerHTML));
            } else if (button.value == "Retr") {
                if(limpiar){
                    let br = resultado.substr(resultado.length - 1, resultado.length);
                    resultado = resultado.substr(0, resultado.length - 1);
                    if (resultado == "" || resultado == "-") {
                        resultado = "0";
                    }
                    if (br == ".") {
                        coma = false;
                    }
                    areaText.innerHTML = resultado;
                }
            }
        })
    );    
}
