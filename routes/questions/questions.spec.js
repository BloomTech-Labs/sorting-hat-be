const db = require('../../database/connection');

describe('questions router', () => {
    describe('test environment', function () {
        it('should use the staging environment', function () {
            expect(process.env.NODE_ENV).toBe('staging');
        })
    })
});