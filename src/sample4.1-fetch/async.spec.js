
test('test fetch request', async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    res = await res.json()
    expect(Object.keys(res).length).toBe(4);
    expect(res.userId).toBe(1);
    expect(res.id).toBe(1);
    expect(res.title).toBe('delectus aut autem');
    expect(res.completed).toBe(false);
})

