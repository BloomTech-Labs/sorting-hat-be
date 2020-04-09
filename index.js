require('dotenv').config({ path: './config/.env'});
require('colors');

const server = require('./routes/api/server.js');

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => console.log(`
    \n*** Server running in ${process.env.NODE_ENV} mode on port ${PORT} ***\n
`.blue.bold));