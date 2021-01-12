describe('Testando o Calculadora.subtrair:', () => {

    let Calculadora = require('./../../src/js/calculadora.js');

    it('Deve retornar 5 para os valores 8 e 3.', () => {
        // Afirma
        expect(Calculadora.subtrair(8, 3)).toEqual(5);
    });

    it('Deve retornar 12 para os valores 9 e -3.', () => {
        // Afirma
        expect(Calculadora.subtrair('9', '-3')).toEqual(12);
    });

    it('Deve retornar -3.5 para os valores 1.5 e 5.', () => {
        // Afirma
        expect(Calculadora.subtrair(1.5, 5)).toEqual(-3.5);
    });

    it('Deve retornar 0 quando o primeiro valor não for numérico.', () => {
        // Afirma
        expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
    });

    it('Deve retornar 0 quando o segundo valor não for numérico.', () => {
        // Afirma
        expect(Calculadora.subtrair(10, undefined)).toEqual(0);
    });

});
