const request = require('supertest');
const server = require('./api').server;

describe('test API', ()=>{
    test('test external function', async () => {
        const name = 'pablo';
        const res = await request(server).get('/echo/' + name);
        expect(res.body.name).toBe(name);
    })
})

afterAll(async()=>{
    server.close();
})



