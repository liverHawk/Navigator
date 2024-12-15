const http = require("http");
const {readFile} = require("node:fs");

const port = 3000;

const server = http.createServer((request, response) => {
    readFile("./index.html", "utf-8", (error, data) => {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write(data);
        response.end();
    });
});

server.listen(port);
console.log(`Ther server has started and is listening on port number : ${port}`);