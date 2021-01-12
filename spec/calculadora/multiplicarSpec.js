describe('Testando o Calculadora.multiplicar:', () => {

    let Calculadora = require('./../../src/js/calculadora.js');

    it('Deve retornar 6 para 2 e 3.', () => {
        // Afirma
        expect(Calculadora.multiplicar(2, 3)).toEqual(6);
    });

    it('Deve retornar 9 para 3 e 3 em formato texto.', () => {
        // Afirma
        expect(Calculadora.multiplicar('3', '3')).toEqual(9);
    });

    it('Deve retornar 0 quando o primeiro valor não for numérico.', () => {
        // Afirma
        expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
    });

    it('Deve retornar 0 quando o segundo valor não for numérico.', () => {
        // Afirma
        expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
    });

});