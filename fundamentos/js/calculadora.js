areaText = document.querySelector('textarea');
        operations = document.querySelectorAll('.operation');
        numbs = document.querySelectorAll('.numb');
        resultado = 0;
        operation=0;
        xi=true;
        coma = false;
        op=false;
        function igualar() {
            if(operation !== 0){
                resultado = areaText.innerHTML = eval(oculto + operation + resultado);
                oculto = 0;
                coma = false;
                operation = 0;
                xi = true;
            }
        }
        numbs.forEach(button => button.addEventListener('click', ev => {
            if (resultado==0 || xi) {
                resultado = button.value;
                areaText.innerHTML = button.value;
            }
         else {
                resultado += button.value;
                areaText.innerHTML += button.value;
            }
            xi=false;
            
        }));
        operations.forEach(button => button.addEventListener('click', ev => {
            if(button.value == "+"){
                igualar();
                oculto = resultado;
                operation = "+";
                xi=true;
                coma = false;
            } else if(button.value == "-"){
                igualar();
                oculto = resultado;
                operation = "-";
                xi=true;
                coma = false;
            } else if(button.value == "*"){
                igualar();
                oculto = resultado;
                operation = "*";
                xi=true;
                coma = false;
            }else if(button.value == "/"){
                igualar();
                oculto = resultado;
                operation = "/";
                xi=true;
                coma = false;
            } else if(button.value == "="){
                igualar();
            } else if(button.value == "C"){
                areaText.innerHTML = "";
                resultado = 0;
                operation = 0;
                oculto = 0;
                xi= true;
                coma = false;
            } else if(button.value == ","){
                if(!coma){
                    areaText.innerHTML += ".";
                    resultado += ".";
                    coma = true;
                }
            } else if(button.value == "+-"){
                resultado = String(-parseFloat(areaText.innerHTML));
                areaText.innerHTML = String(-parseFloat(areaText.innerHTML));
            } else if(button.value == "Retr"){
                br=resultado.substr(resultado.length-1,resultado.length);
                resultado=resultado.substr(0,resultado.length-1);
                if (resultado=="") {resultado="0";}
                if (br==".") {coma=false;}
                areaText.innerHTML=resultado;
            }

        }));