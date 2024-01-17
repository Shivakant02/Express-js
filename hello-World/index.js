const express = require('express')

const app = express();

const PORT = 4005;
const HOSTNAME = 'localhost'

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>About page</h1>")
})

app.get('/contact', (req, res) => {
    res.send("<h1>Contact page</h1>")
})
app.get('/faq', (req, res) => {
    res.send("<h1>FAQ page</h1>")
})

app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})