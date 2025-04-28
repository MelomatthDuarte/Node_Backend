const http = require('http');
const fs = require('fs');
const path = require('path');
const { multiplication } = require("./utils/operations");

const PORT = 5000;

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, '../public', req.url === '/' ? 'home.html' : req.url.substring(1) + '.html');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, '../public/404.html'), (error404, content404) => {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end(content404);
            });
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content);
        }
    });
}); 

console.log("✅multiplication", multiplication(3, 5));
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});