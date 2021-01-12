describe('Testando o Calculadora.dividir:', () => {

    let Calculadora = require('./../../src/js/calculadora.js');

    it('Deve retornar 6 para 12 e 2.', () => {
        // Afirma
        expect(Calculadora.dividir(12, 2)).toEqual(6);
    })

    it('Deve retornar 3 para 9 e 3 em formato texto.', () => {
        // Afirma
        expect(Calculadora.dividir('9', '3')).toEqual(3);
    });

    it('Deve retornar 1.5 para 4.5 e 3', () => {
        // Afirma
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    });

    it('Deve retornar "erro" ao dividir por zero', () => {
        // Arruma
        let msgErro = "erro";

        // Afirma
        expect(Calculadora.dividir(10, 0)).toEqual(msgErro);
        expect(Calculadora.dividir(10, '0')).toEqual(msgErro);
    });

    it('Deve retornar 0 quando o primeiro valor não for numérico.', () => {
        // Afirma
        expect(Calculadora.dividir(undefined, 10)).toEqual(0);
    });

    it('Deve retornar 0 quando o segundo valor não for numérico.', () => {
        // Afirma
        expect(Calculadora.dividir(10, undefined)).toEqual(0);
    });
});