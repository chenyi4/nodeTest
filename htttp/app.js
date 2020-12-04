const express = require('express')
const app = express()
const port = 3000
var arr = {
    name: 300
}

app.get('/', (req, res) => res.send(arr));

app.get('/aaa/ajhhs', (req, res) => res.send(arr));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));