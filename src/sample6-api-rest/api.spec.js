const request = require('supertest');
const server = require('./api').server;

describe('test API', ()=>{
    test('test external function', async () => {
        const name = 'pablo';
        const res = await request(server).get('/echo/' + name);
        expect(res.body.name).toBe(name);
    })

    test('test external function2', async () => {
        const arr = [5,3,1,2]
        const res = await request(server).post('/sort/').send(arr);
        expect(res.body).toEqual([1,2,3,5]);
    })
})

afterAll(async()=>{
    server.close();
})



