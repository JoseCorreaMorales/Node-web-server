const express = require('express');

const Service = require('./src/service');

const app = express();
const PORT = 3000

/* 1 - route, 2- controller */
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the web server!'
    })
})

app.get('/users', (req, res) => {
    res.json({
        message: 'List of users',
        body: Service.getUsers(),
    })
})

app.listen(PORT, () => { 
    console.log(`Server listening on http://localhost:${PORT}`)
})