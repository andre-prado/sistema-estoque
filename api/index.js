const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

app.get('/teste', (req, res) => {
    res.send('hello world!');
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
})
