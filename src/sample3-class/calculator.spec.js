const Calculator = require('./calculator')

const calculator = new Calculator();

describe('Tests de suma', ()=>{
    test('Suma de enteros positivos', () => {
        const res = calculator.sum(1, 2);
        expect(res).toBe(3);
    })
})

describe('Tests de la division', ()=>{
    test('Division de enteros positivos', () => {
        const res = calculator.div(2, 2);
        expect(res).toBe(1);
    })
})
