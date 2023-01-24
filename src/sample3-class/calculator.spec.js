const Calculator = require('./calculator')

const calculator = new Calculator();

test('test class method', () => {
    const res = calculator.sum(1, 2);
    expect(res).toBe(3);
})
