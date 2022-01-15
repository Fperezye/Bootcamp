import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  private resultado = '0';
  private operation = '0';
  private primeroEnPantalla = true;
  private coma = false;
  private pantalla = '0';
  private limpiar = false;
  private oculto= '0';

  constructor() { }

  public pintaPantalla() {
    this.pantalla = this.pantalla;
  }

  public igualar() {
    this.limpiar = false;
    if ("+-*/=".indexOf(this.operation) == -1) return;
    let operando = parseFloat(this.resultado);
    let operando2 = parseFloat(this.oculto);
    switch (this.operation) {
        case "+":
          operando2 += operando;
            break;
        case "-":
          operando2 -= operando;
            break;
        case "*":
          operando2 *= operando;
            break;
        case "/":
          operando2 /= operando;
            break;
    }
    this.resultado = this.pantalla = String(parseFloat(operando2.toPrecision(15)));
    this.pintaPantalla();
    this.oculto = '0';
    this.coma = false;
    this.operation = '0';
    this.primeroEnPantalla = true;
    return this.resultado;
  }

  public Numb(value: string) {
    if (this.resultado == "0" || this.primeroEnPantalla) {
      this.resultado = value;
      this.pantalla = value;
      this.limpiar = true;
    } else {
      this.resultado += value;
      this.pantalla += value;
      this.limpiar = true;
    }
    this.primeroEnPantalla = false;
    this.pintaPantalla();
  }

  public Operation(value: string){
    if (value == "+") {
      this.igualar();
      this.oculto = this.resultado;
      this.operation = "+";
      this.primeroEnPantalla = true;
      this.coma = false;
    } else if (value == "-") {
      this.igualar();
      this.oculto = this.resultado;
      this.operation = "-";
      this.primeroEnPantalla = true;
      this.coma = false;
    } else if (value == "*") {
      this.igualar();
      this.oculto = this.resultado;
      this.operation = "*";
      this.primeroEnPantalla = true;
      this.coma = false;
    } else if (value == "/") {
      this.igualar();
      this.oculto = this.resultado;
      this.operation = "/";
      this.primeroEnPantalla = true;
      this.coma = false;
    } else if (value == "=") {
      this.igualar();
    } else if (value == "C") {
      this.pantalla = "";
      this.resultado = '0';
      this.operation = '0';
      this.oculto = '0';
      this.primeroEnPantalla = true;
      this.coma = false;
      this.pintaPantalla();
    } else if (value == ",") {
        if (!this.coma) {
            if(this.primeroEnPantalla){
              this.pantalla = "0.";
              this.resultado = "0.";
              this.primeroEnPantalla = false;
              this.pintaPantalla();
            } else {
              this.pantalla += ".";
              this.resultado += ".";
              this.coma = true;
              this.primeroEnPantalla = false;
              this.pintaPantalla();
            }
        }
    } else if (value == "+-") {
      this.resultado = (-this.resultado).toString();
      this.pantalla = this.pantalla = (-this.pantalla).toString();;
      this.pintaPantalla();
    } else if (value == "Retr") {
        if(this.limpiar){
            let br = this.resultado.substr(this.resultado.length - 1, this.resultado.length);
            this.resultado = this.resultado.substr(0, this.resultado.length - 1);
            if (this.resultado == "" || this.resultado == "-") {
              this.resultado = "0";
            }
            if (br == ".") {
              this.coma = false;
            }
            this.pantalla = this.resultado;
            this.pintaPantalla();
        }
    }
  }

  ngOnInit(): void {
  }

}
