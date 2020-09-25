const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("testing... 1...2...3");
  })
  .listen(3000);

console.log("Server running at http://localhost:3000/");
