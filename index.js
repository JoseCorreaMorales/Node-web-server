const express = require('express');

const Service = require('./src/service');

const app = express();
const PORT = 3000

app.use(express.json()) /* recieve json from clients */

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

app.get('/users/:id', (req, res) => {
    let { params: { id } } = req
    let user = Service.getUser(id);

    res.json({
        message: `single with id: ${id}` ,
        body: user
    })
 })


app.post('/users', (req, res) => {
    //let newUser = req.body;
    let { body: newUser } = req;
    let user =  Service.createuser(newUser);
    res.status(201).json({
        message: 'User Created',
        body:  user
    })
})


app.put('/users/:id', (req, res) => {
    let identifier = req.params.id;
    let { body: UdapteData } = req;
    let user = Service.updateUser(identifier, UdapteData);

    res.json({
       message: `user with id: ${identifier} updated`,
        body: user
    })

 })


app.delete('/users/:id', (req, resp) => {
    let identifier = req.params.id;
    let user = Service.deleteUser(identifier);

    resp.status(200).json({
        message: `user with id: ${identifier} deleted`,
        body: user
    })
 })

app.listen(PORT, () => { 
    console.log(`Server listening on http://localhost:${PORT}`)
})