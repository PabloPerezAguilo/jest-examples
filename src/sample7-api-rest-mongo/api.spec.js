const request = require('supertest');
const mongoose = require("mongoose");
const { server, db } = require('./api');

describe('test API', () => {
    test('test empty cats', async() => {
        const res = await request(server).get('/cat/');
        expect(res.body.length).toBe(0);
    })

    test('test external function', async() => {
        const res = await request(server).post('/cat/');
        expect(res.body.name).toBe('testName');
    })

    test('test empty cats', async() => {
        const res = await request(server).get('/cat/');
        expect(res.body.length).toBe(0);
    })
})

afterEach(async() => {
    await mongoose.connection.db.dropDatabase();
})

afterAll(async() => {
    server.close();
    await mongoose.connection.close()
})


