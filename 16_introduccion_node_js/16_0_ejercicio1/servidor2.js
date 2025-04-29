const http = require("http");
const fs = require("fs");

const servidor = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error interno del servidor");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

servidor.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});