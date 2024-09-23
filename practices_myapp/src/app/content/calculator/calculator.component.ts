import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  input_text1: number[] = [];
  input_text2: number[] = [];
  valor_temp: string = "";
  valor_input: string = "";
  valor_input2: string = "";
  operationSimbol: string = "";
  isOperation: boolean = false;
  isCalculate: boolean = false;



  Vaciar_Inputs() {
    this.input_text1.length = 0;
    this.input_text2.length = 0;
    this.valor_input = ""
    this.valor_input2 = ""
    this.operationSimbol = ""

  }

  Insertar_Valor_btn(value_btn: number) {
    if (this.isOperation == false) {
      this.input_text1.push(value_btn)
      let texto = this.input_text1.join("")
      this.valor_input = texto;
    }
    else if (this.isOperation == true) {
      this.input_text2.push(value_btn)
      let texto = this.input_text2.join("")
      this.valor_input2 = texto;
    }

  }


  Insertar_Resultado(isActivated: boolean) {
    this.isCalculate = isActivated;
    if (this.isCalculate == true && this.valor_input.length > 0 && this.valor_input2.length > 0) {
      this.Operations_Basic(this.operationSimbol)
    }
    else if (this.isCalculate == true && this.operationSimbol == "x²" || this.operationSimbol == "√") {
      this.Operations_Basic(this.operationSimbol)
    }
  }



  Insertar_Simbolo(operation_simbol: string) {
    this.operationSimbol = operation_simbol;

      if (this.operationSimbol === "√" && !this.isOperation) {

        if (!this.valor_input.includes("√")) {

          this.valor_input = this.operationSimbol + this.valor_input;
          this.isOperation = true;
        }

      } else if (!this.isOperation) {

        this.valor_input = this.valor_input.concat(this.operationSimbol);
        this.isOperation = true;
      }
  }

  Operations_Basic(operation_simbol: string) {
    let numero_1 = this.valor_input.replace(/\D/g, '');
    let numero_2 = this.valor_input2.replace(/\D/g, '')
    let resultado;
    switch (operation_simbol) {
      case "+":
        resultado = Number(numero_1) + Number(numero_2)
        this.valor_input2 = this.valor_input2 + "=" + String(resultado)
        this.isOperation = false
        this.isCalculate = false;
        break;
      case "-":
        resultado = Number(numero_1) - Number(numero_2)
        this.valor_input2 = this.valor_input2 + "=" + String(resultado)
        this.isOperation = false
        this.isCalculate = false;
        break;
      case "*":
        resultado = Number(numero_1) * Number(numero_2)
        this.valor_input2 = this.valor_input2 + "=" + String(resultado)
        this.isOperation = false
        this.isCalculate = false;
        break;
      case "/":
        resultado = Number(numero_1) / Number(numero_2)
        this.valor_input2 = this.valor_input2 + "=" + String(resultado)
        this.isOperation = false
        this.isCalculate = false;
        break;

      case "x²":
        resultado = Math.pow(Number(numero_1), 2)
        this.valor_input2 = "=" + String(resultado)
        this.isOperation = false
        this.isCalculate = false;
        break;

      case "√":
        resultado = Math.sqrt(Number(numero_1))
        this.valor_input2 = "=" + String(resultado)
        this.isOperation = false
        this.isCalculate = false;
        break;
    }
  }






}

