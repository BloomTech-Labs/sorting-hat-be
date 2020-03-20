require('dotenv').config({ path: '../../config/.env'});

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const questionsRouter = require('../questions/router.js');
const answersRouter = require('../answers/router.js');

const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
server.use('/api/questions', questionsRouter);
server.use('/api/answers', answersRouter);

server.get('/', (req, res) => {
    res.json({ api: 'up' });
})

module.exports = server;