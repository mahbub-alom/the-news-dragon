const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const categories = require('./categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('server is coming')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`dragon api is running${port}`);
})
