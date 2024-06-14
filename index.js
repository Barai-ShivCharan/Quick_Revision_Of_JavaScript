var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!,ShivCharan BArai ,This is first time to run server.");
  })
  .listen(8088);
