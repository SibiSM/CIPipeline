const request = require('supertest');
const server = require('../app');  // Adjust the path if necessary

describe('GET /', () => {
    it('should return Hello, World!', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, World!\n');
    });
});
