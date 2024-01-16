const http = require('http')
const PORT = 3018;
const hostName = 'localhost';
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type","text/plain")
    res.end(JSON.stringify({"mentor":"shiva"}))
})

server.listen(PORT, () => {
    console.log(`Server running at ${hostName}:${PORT}`);
})