const request = require('supertest');
const server = require('../api/server.js');

describe('GET /', function() {
    it('Says that the api is up', function() {
        return request(server).get('/').expect(200);
    });
});

afterAll(async () => {
	await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});