import {Calculadora} from "../js/calculadora.js"

describe('Calculadora', () => {
    describe('Operaciones', () => {
        describe('Sumas', () => {
            it('Suma positivos', () => {
                let calc = new Calculadora();
                let result = 0;  
                calc.Numb('3');
                calc.Operation('+');
                calc.Numb('2');
                result = calc.igualar();
                expect(result).toBe('5');
            })

            it('Suma ceros', () => {
                let calc = new Calculadora();
                let result = 0;           
                calc.Numb('0');
                calc.Operation('+');
                calc.Numb('0');
                result = calc.igualar();
                expect(result).toBe('0');
            })

            it('Suma negativo', () => {
                let calc = new Calculadora();
                let result = 0;       
                calc.Numb('-3');
                calc.Operation('+');
                calc.Numb('2');
                result = calc.igualar();
                expect(result).toBe('-1');
            })
        })

        describe('Restas', () => {
            it('Resta positivos', () => {
                let calc = new Calculadora();
                let result = 0;       
                calc.Numb('3');
                calc.Operation('-');
                calc.Numb('2');
                result = calc.igualar();
                expect(result).toBe('1');
            })

            it('Resta ceros', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('0');
                calc.Operation('-');
                calc.Numb('0');
                result = calc.igualar();
                expect(result).toBe('0');
            })

            it('Resta negativo', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('-3');
                calc.Operation('-');
                calc.Numb('2');
                result = calc.igualar();
                expect(result).toBe('-5');
            })
        })

        describe('Multiplicaciones', () => {
            it('Multiplicación positivos', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('3');
                calc.Operation('*');
                calc.Numb('2');
                result = calc.igualar();
                expect(result).toBe('6');
            })

            it('Multiplicación ceros', () => {
                let calc = new Calculadora();
                let result = 0;  
                calc.Numb('5');
                calc.Operation('*');
                calc.Numb('0');
                result = calc.igualar();
                expect(result).toBe('0');
            })

            it('Multiplicación negativo', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('-3');
                calc.Operation('*');
                calc.Numb('6');
                result = calc.igualar();
                expect(result).toBe('-18');
            })
        })

        describe('Divisiones', () => {
            it('División positivos', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('10');
                calc.Operation('/');
                calc.Numb('2');
                result = calc.igualar();
                expect(result).toBe('5');
            })

            it('División ceros', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('5');
                calc.Operation('/');
                calc.Numb('0');
                result = calc.igualar();
                expect(result).toBe('Infinity');
            })

            it('División negativo', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('-30');
                calc.Operation('/');
                calc.Numb('10');
                result = calc.igualar();
                expect(result).toBe('-3');
            })
        })
    })

    describe('Operaciones extra', () => {
        describe('Coma', () => {
            it('Suma', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('2');
                calc.Operation(',');
                calc.Numb('3')
                calc.Operation('+');
                calc.Numb('3');
                calc.Operation(',');
                calc.Numb('2');
                result = calc.igualar();
                expect(result).toBe('5.5');
            })

            it('Resta', () => {
                let calc = new Calculadora();
                let result = 0;   
                calc.Numb('1');
                calc.Numb('0');
                calc.Operation(',')
                calc.Numb('8');
                calc.Operation('-');
                calc.Numb('5');
                calc.Operation(',');
                calc.Numb('1');
                result = calc.igualar();
                expect(result).toBe('5.7');
            })

            it('Multiplicación', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('2');
                calc.Operation(',')
                calc.Numb('5');
                calc.Operation('*');
                calc.Numb('4');
                result = calc.igualar();
                expect(result).toBe('10');
            })

            it('División', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('4');
                calc.Operation('/');
                calc.Operation(',');
                calc.Numb('5');
                result = calc.igualar();
                expect(result).toBe('8');
            })
        })

        describe('Cambio de signo', () => {
            it('Suma', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('2');
                calc.Operation(',');
                calc.Numb('3');
                calc.Operation('+-')
                calc.Operation('+');
                calc.Numb('5');
                result = calc.igualar();
                expect(result).toBe('2.7');
            })

            it('Resta', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('2');
                calc.Numb('3');
                calc.Operation('-');
                calc.Numb('8');
                calc.Operation('+-');
                result = calc.igualar();
                expect(result).toBe('31');
            })

            it('Multiplicación', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('2');
                calc.Operation(',');
                calc.Numb('5')
                calc.Operation('+-');
                calc.Operation('*');
                calc.Numb('4');
                result = calc.igualar();
                expect(result).toBe('-10');
            })

            it('División', () => {
                let calc = new Calculadora();
                let result = 0;
                calc.Numb('4');
                calc.Operation('/');
                calc.Operation(',');
                calc.Numb('5');
                calc.Operation('+-')
                result = calc.igualar();
                expect(result).toBe('-8');
            })
        })

        it('Borrar todo', () => {
            let calc = new Calculadora();
            let result = 0;
            calc.Numb('4');
            calc.Operation('+');
            calc.Numb('4');
            calc.Operation('C');
            result = calc.igualar();
            expect(result).toBe(undefined);
        })     

        it('Borrar', () => {
            let calc = new Calculadora();
            let result = 0;
            calc.Numb('4');
            calc.Numb('4');
            calc.Numb('4');
            calc.Numb('4');
            calc.Operation('Retr');
            calc.Operation('Retr');
            calc.Operation('+');
            calc.Numb('6');
            result = calc.igualar();
            expect(result).toBe('50');
        })
    })

    describe('Operaciones anidadas', () => {
        it('Todas', () => {
            let calc = new Calculadora();
            let result = 0;
            calc.Numb('4');
            calc.Operation('+');
            calc.Numb('6');
            calc.Operation('*');
            calc.Numb('3');
            calc.Operation('/');
            calc.Numb('5');
            calc.Operation('-');
            calc.Numb('4');
            result = calc.igualar();
            expect(result).toBe('2');
        })
    })
})