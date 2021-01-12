describe('Testando o Calculadora.Adicionar:', () => {

    let Calculadora = require('./../../src/js/calculadora.js');

    it('Deve retornar 5 para os valores 2 e 3.', () => {
        // Afirma
        expect(Calculadora.adicionar(2, 3)).toEqual(5)
    });

    it('Deve retornar 6 para 9 e -3 no formato texto.', () => {
        // Afirma
        expect(Calculadora.adicionar('9', '-3')).toEqual(6);
    });

    it('Deve retornar 4.5 para 1.5 e 3.', () => {
        // Afirma
        expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
    });

    it('Deve retornar 0 quando o primeiro valor não for numérico.', () => {
        // Afirma
        expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
    });

    it('Deve retornar 0 quando o segundo valor não for numérico.', () => {
        // Afirma
        expect(Calculadora.adicionar(10, undefined)).toEqual(0);
    });
})