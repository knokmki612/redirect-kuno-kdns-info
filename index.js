const http = require("node:http");

/** @type {function(Request, Response): void} */
function onRequest(request, response) {
  const url = new URL(request.url, "https://blog.kimiaki.space");
  response.writeHead(301, { Location: url });
  response.end();
}

http.createServer(onRequest).listen(process.env.PORT ?? 8080);
