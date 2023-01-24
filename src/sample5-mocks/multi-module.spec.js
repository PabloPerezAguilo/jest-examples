const hi = require('./module-b')

jest.mock('./module-a', ()=> ()=>'pablo')

test('test ', () => {
    const res = hi()
    expect(res).toBe('hello pablo');
})
