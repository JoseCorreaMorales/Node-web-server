const express = require('express');

const app = express();
const PORT = 3000

/* 1 - route, 2- controller */
app.get('/', (req, res) => {
    res.json({
        message: 'Hello 🌍!'
    })
})

app.listen(PORT, () =>{ 
    console.log(`Server listening on http://localhost:${PORT}`)
})