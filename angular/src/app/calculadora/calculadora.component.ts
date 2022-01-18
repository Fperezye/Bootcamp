import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';


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
  private miPantalla = '0';
  private miResumen = '0';
  public resumen = '0';
  public pantalla = '0';
  private limpiar = false;
  private oculto= '0';

  constructor(private out: LoggerService) {
    this.inicio();
  }

  public inicio(): void {
    this.resultado = '0';
    this.operation = '0';
    this.primeroEnPantalla = true;
    this.coma = false;
    this.pantalla = '0';
    this.oculto = '0';
    this.pintaPantalla(this.resultado);
  }

  public pintaPantalla(value: string): void {
    this.miPantalla = value;
    this.pantalla = this.miPantalla;
  }

  public pintaResumen(value: string): void {
    this.miResumen = value;
    this.resumen = this.miResumen;
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
    this.resultado = String(parseFloat(operando2.toPrecision(15)));
    this.pintaResumen(this.resultado);
    this.pintaPantalla(this.resultado);
    this.oculto = '0';
    this.coma = false;
    this.operation = '0';
    this.primeroEnPantalla = true;
    return this.resultado;
  }

  public Numb(value: string) {
    if (this.resultado == "0" || this.primeroEnPantalla) {
      this.resultado = value;
      this.limpiar = true;
    } else {
      this.resultado += value;
      this.limpiar = true;
    }
    this.primeroEnPantalla = false;
    this.pintaPantalla(this.resultado);
  }

  public ValorActual() {
    return this.resultado;
  }

  public Operation(value: string){
    if (value == "+") {
      this.igualar();
      this.oculto = this.resultado;
      this.pintaResumen(this.oculto);
      this.operation = "+";
      this.primeroEnPantalla = true;
      this.coma = false;
      this.miResumen += ' '.concat(this.operation);
      this.pintaResumen(this.miResumen);
    } else if (value == "-") {
      this.igualar();
      this.oculto = this.resultado;
      this.pintaResumen(this.oculto);
      this.operation = "-";
      this.primeroEnPantalla = true;
      this.coma = false;
      this.miResumen += ' '.concat(this.operation);
      this.pintaResumen(this.miResumen);
    } else if (value == "*") {
      this.igualar();
      this.oculto = this.resultado;
      this.pintaResumen(this.oculto);
      this.operation = "*";
      this.primeroEnPantalla = true;
      this.coma = false;
      this.miResumen += ' '.concat(this.operation);
      this.pintaResumen(this.miResumen);
    } else if (value == "/") {
      this.igualar();
      this.oculto = this.resultado;
      this.pintaResumen(this.oculto);
      this.operation = "/";
      this.primeroEnPantalla = true;
      this.coma = false;
      this.miResumen += ' '.concat(this.operation);
      this.pintaResumen(this.miResumen);
    } else if (value == "=") {
      this.igualar();
    } else if (value == "C") {
      this.resultado = '0';
      this.operation = '0';
      this.oculto = '0';
      this.miResumen = '0';
      this.primeroEnPantalla = true;
      this.coma = false;
      this.pintaResumen(this.miResumen);
      this.pintaPantalla(this.resultado);
    } else if (value == ",") {
        if (!this.coma) {
            if(this.primeroEnPantalla){
              this.resultado = "0.";
              this.primeroEnPantalla = false;
              this.coma = true;
              this.pintaPantalla(this.resultado);
            } else {
              this.resultado += ".";
              this.coma = true;
              this.primeroEnPantalla = false;
              this.pintaPantalla(this.resultado);
            }
        }
    } else if (value == "+-") {
      this.resultado = (-this.resultado).toString();
      this.pintaPantalla(this.resultado);
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
            this.pintaPantalla(this.resultado);
        }
    }
  }

  ngOnInit(): void {
  }

}
