const Cont = require('./cont')

const cont = new Cont();

beforeEach(()=>{
    cont.reset();
})

describe('Cont', ()=>{
    test('1 inc', () => {
        const res = cont.inc();
        expect(res).toBe(1);
    })

    test('2 inc', () => {
        cont.inc();
        const res = cont.inc();
        expect(res).toBe(2);
    })

    test('3 inc with reset', () => {
        cont.inc();
        cont.reset();
        cont.inc();
        cont.inc();
        const res = cont.inc();
        expect(res).toBe(3);
    })
})
