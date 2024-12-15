const http = require("http");
const {readFile} = require("node:fs");

const port = 3000;

const favicon = (response) => {
    console.log("favicon");
    readFile("./src/favicon.ico", (error, data) => {
        response.writeHead(200, {
            "Content-Type": "image/x-icon"
        });
        response.write(data);
        response.end();
    })
}
const index = (response) => {
    console.log("index page")
    readFile("./src/index.html", "utf-8", (error, data) => {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write(data);
        response.end();
    });
};

const test = (response) => {
    console.log("test page")
    readFile("./src/test.html", "utf-8", (error, data) => {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write(data);
        response.end();
    });
};

const not_found = (response) => {
    console.log("not found page")
    readFile("./src/404.html", "utf-8", (error, data) => {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write(data);
        response.end();
    });
};

const server = http.createServer((request, response) => {
    console.log(request.url);
    switch(request.url) {
        case "/favicon.ico":
            favicon(response);
            break;
        case "/":
            index(response);
            break;
        case "/test":
            test(response);
            break;
        default:
            not_found(response);
    }
});

server.listen(port);
console.log(`Ther server has started and is listening on port number : ${port}`);