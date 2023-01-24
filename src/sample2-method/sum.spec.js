const { sum } = require('./sum')

describe('Casos de test de la funcion suma', () => {

    test('suma de numeros', () => {
        const res = sum(1, 2);
        expect(res).toBe(3);
    })

    test('suma de strings que contienen numeros', () => {
        const res = sum('1', '2');
        expect(res).toBe(3);
    })

    test('suma de strings', () => {
        const res = sum('a', 2);
        expect(res).toBe(NaN);
    })

    test('suma de otros strings', () => {
        const res = sum('dsfsdffda', 'dgffgfgf');
        expect(res).toBe(NaN);
    })

    test('suma de nulos', () => {
        const res = sum(null, 3);
        expect(res).toBe(NaN);
    })

    test('suma de numeros decimales', () => {
        const res = sum(1.1, 1.2);
        expect(res).toBe(2.3);
    })

    test('suma de numeros decimales en strings', () => {
        const res = sum('1.1', 1.2);
        expect(res).toBe(2.3);
    })
})

