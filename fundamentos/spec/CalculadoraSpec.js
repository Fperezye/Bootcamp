import {Calculadora} from "../js/calculadora.js"

describe('Calculadora', () => {
    let calc = null;

    beforeEach(function(){
        calc = new Calculadora();
    });

    describe("Probar un número:", () => {
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','123456789'].forEach(number => {
            it(`Número ${number}`, () => {
                for(let i=0; i<number.length; i++){
                    expect(calc.Numb(number[i])).toBe(number[i]);
                }
                
            });
        });
    });

    describe("Probar una operación:", () => {
        ['+', '-', '*', '/', '=', ',', '+-', 'C', 'Retr'].forEach(op => {
            it(`operación ${op}`, function(){
                expect(calc.Operation(op)).toBe(op);
            });
        });
    });

    describe("Operaciones:", function(){
        describe("Operaciones sin problemas", function(){
            let operaciones = [
                {numA:'3', op:'+', numB:'8', result:'11'},
                {numA:'0', op:'+', numB:'0', result:'0'},
                {numA:'5', op:'+', numB:'-7.2', result:'-2.2'},
                {numA:'21.5', op:'-', numB:'7', result:'14.5'},
                {numA:'0', op:'-', numB:'0', result:'0'},
                {numA:'-2', op:'-', numB:'10', result:'-12'},
                {numA:'5', op:'*', numB:'3', result:'15'},
                {numA:'-4', op:'*', numB:'4', result:'-16'},
                {numA:'4.5', op:'*', numB:'2', result:'9'},
                {numA:'-15', op:'/', numB:'2', result:'-7.5'},
                {numA:'3', op:'/', numB:'6', result:'0.5'},
                {numA:'-3', op:'/', numB:'-2', result:'1.5'},
            ];
            operaciones.forEach( casos => {
                it(`${casos.numA} ${casos.op} ${casos.numB} = ${casos.result}`, function(){
                    calc.Numb(casos.numA);
                    calc.Operation(casos.op);
                    calc.Numb(casos.numB);
                    calc.Operation('=');
                    expect(calc.ValorActual()).toBe(casos.result);
                });
            });
        });

        describe('Infinito', () => {
            it('Division por 0', () => {
                calc.Numb('4');
                calc.Operation('/');
                calc.Numb('0');
                calc.Operation('=');
                expect(calc.ValorActual()).toBe('Infinity');
            })

            it('Operaciones con infinito', () => {
                calc.Numb('4');
                calc.Operation('/');
                calc.Numb('0');
                calc.Operation('-');
                calc.Numb('2');
                calc.Operation('=');
                expect(calc.ValorActual()).toBe('Infinity');
            })
        })

        describe('Operaciones anidadas', () => {
            it('Todas', () => {
                calc.Numb('4');
                calc.Operation('+');
                calc.Numb('6');
                calc.Operation('*');
                calc.Numb('3');
                calc.Operation('/');
                calc.Numb('5');
                calc.Operation('-');
                calc.Numb('4');
                calc.Operation('=');
                expect(calc.ValorActual()).toBe('2');
            })
        })
    })

    describe('Operaciones extra', () => {
        it('Cambio de signo', () => {
            calc.Numb('4');
            calc.Operation('+-');
            expect(calc.ValorActual()).toBe('-4');
        })     

        it('Segunda coma', () => {
            calc.Numb('2');
            calc.Operation(',');
            calc.Numb('7');
            calc.Operation(',');
            calc.Numb('3');
            expect(calc.ValorActual()).toBe('2.73');
        })  

        it('Borrar con C', () => {
            let result = 0;
            calc.Numb('3');
            calc.Operation('+');
            calc.Numb('5');
            calc.Operation('-');
            calc.Operation('C');
            expect(calc.ValorActual()).toBe('0');
        })     

        it('Borrar', () => {
            calc.Numb('4');
            calc.Numb('4');
            calc.Numb('4');
            calc.Numb('4');
            calc.Operation('Retr');
            calc.Operation('Retr');
            expect(calc.ValorActual()).toBe('44');
        })

        it('Borrar decimales', () => {
            calc.Numb('3');
            calc.Operation(',');
            calc.Numb('2');
            calc.Operation('Retr');
            calc.Operation('Retr');
            expect(calc.ValorActual()).toBe('3');
        })

        it('Borrar decimales y volver a poner coma', () => {
            calc.Numb('6');
            calc.Operation(',');
            calc.Numb('9');
            calc.Operation('Retr');
            calc.Operation('Retr');
            calc.Operation(',');
            calc.Numb('2');
            expect(calc.ValorActual()).toBe('6.2');
        })
    })
})