import {aleatorio, adivina, array, primo, primos, validarNIF, palindromo, AdivinaElNumero} from "../js/ejercicios.js"

describe('Pruebas ejercicios js', () => {
    describe('Aleatorio', () => {
            it('Positivo', () => {
                let result = aleatorio(3, 8);
                expect(result).toBeLessThan(9);
                expect(result).toBeGreaterThan(2);
            })

            it('Negativo', () => {
                let result = aleatorio(-8, 3);
                expect(result).toBeLessThan(4);
                expect(result).toBeGreaterThan(-9);
            })

            it('Invalido', () => {
                let result = aleatorio(8, 3);
                expect(result).toBe(undefined);
            })
    })

    describe('Array', () => {
        it('Por defecto', () => {
            let result = array(5);
            let valor = ["", "", "", "", ""];
            expect(result).toEqual(valor);
        })

        it('Valor inicial', () => {
            let result = array(7, 1);
            let valor = [1, 1, 1, 1, 1, 1, 1];
            expect(result).toEqual(valor);
        })

        it('Valores extra', () => {
            let result = array(8, 1, 5, 9);
            let valor = [5, 9, 1, 1, 1, 1, 1, 1];
            expect(result).toEqual(valor);
        })

        it('Resto mayor que array', () => {
            let result = array(3, 1, 5, 9, 6 ,8);
            let valor = [5, 9, 6];
            expect(result).toEqual(valor);
        })
    })

    describe('Primo', () => {
        it('Verdadero', () => {
            let result = primo(13);
            expect(result).toEqual(true);
        })

        it('Falso', () => {
            let result = primo(20);
            expect(result).toEqual(false);
        })
    })

    describe('Array de primos', () => {
        it('Caso único', () => {
            let result = primos(4);
            let valor = [2, 3, 5, 7];
            expect(result).toEqual(valor);
        })
    })

    describe('NIF', () => {
        it('Caso real', () => {
            let result = validarNIF("36046922M");
            expect(result).toEqual(true);
        })

        it('Caso falso', () => {
            let result = validarNIF("36046M922");
            expect(result).toEqual(false);
        })
    })

    describe('Palindromo', () => {
        it('Caso real', () => {
            let result = palindromo("La ruta nos aporto otro paso natural");
            expect(result).toEqual(true);
        })

        it('Caso falso', () => {
            let result = palindromo("Ayer fui al supermercado");
            expect(result).toEqual(false);
        })
    })


    describe('Adivina el numero', () => {
        it('Acierto', () => {
            let adivina = new AdivinaElNumero();
            adivina.intentar(adivina.numero);
            expect(adivina.acierto).toEqual(true);
        })
        
        it('Intento fallido', () => {
            let adivina = new AdivinaElNumero();
            adivina.numero = 100;
            for(let i = 0; i < 10; i++) {adivina.intentar(1);}
            expect(adivina.acierto).toEqual(false);
            expect(adivina.numIntentos).toEqual(10);
        })

        it('Cadena', () => {
            let adivina = new AdivinaElNumero();
            adivina.intentar("a");
            adivina.intentar("b");
            adivina.intentar("c");
            adivina.intentar("d");
            expect(adivina.numIntentos).toEqual(0);
        })
    })

})