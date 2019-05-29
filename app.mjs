// todo tutorial import method
import express from 'express';
import db from './db/db';

// online solution express import method
// const express = require('express', '4.17.1')

// troubleshooting with circular dependencies, interesting but not the main problem
// import from './internal'

const app = express();

// app.get('/api/v1/todos', (req, res) => {
//     res.status(200).send({
//         success: 'true',
//         message: 'todos retrieved successfully',
//         todos: db
//     })
// });

app.get('/', (req, res) => {
    res.send('Hello Word!')
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
