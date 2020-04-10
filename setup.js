const db = require('./database/connection.js');

beforeAll(async () => {
    await db.raw("ALTER TABLE points DISABLE TRIGGER ALL")
    await db.raw("ALTER TABLE tracks DISABLE TRIGGER ALL")
    await db.raw("ALTER TABLE answers DISABLE TRIGGER ALL")
    await db.raw("ALTER TABLE questions DISABLE TRIGGER ALL")
    await db.seed.run()
})