const asyncFunction = () => new Promise((res, rej)=> setTimeout(()=>res('hello'), 1000));


test('test simple async function', async () => {
    const res = await asyncFunction();
    expect(res).toBe('hello');
})

