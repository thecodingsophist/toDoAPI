// todo tutorial import method
import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

// online solution express import method
// const express = require('express', '4.17.1')

// troubleshooting with circular dependencies, interesting but not the main problem
// import from './internal'

const app = express();

//Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('What\'s up?')
})

// First Test
// app.get('/', (req, res) => {
//     res.send('Hello Word!')
// })

app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});

app.post('/api/v1/todos', (req, res) => {
    if(!req.body.title) {
        return res.status(400).send({
            success: 'false',
            message: 'title is required'
        });
    } else if(!req.body.description) {
        return res.status(400).send({
            success: 'false',
            message: 'description is required'
        });
    }
    const todo = {
        id: db.length + 1,
        title: req.body.title,
        description: req.body.description
    }
    db.push(todo);
    return res.status(201).send({
        success: 'true',
        message: 'todo added successfully',
        todo
    })
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
