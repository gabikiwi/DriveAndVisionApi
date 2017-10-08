const http = require('http');
const fs = require('fs');

// pass in index.html and will have a callback and we use an arrow function
fs.readFile('public/quickstart.html', (err, html) => {

    if (err) {
        throw err;
    }

    const hostname = '127.0.0.1';
    const port = 8080;

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(html);
        res.end();
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });


});

