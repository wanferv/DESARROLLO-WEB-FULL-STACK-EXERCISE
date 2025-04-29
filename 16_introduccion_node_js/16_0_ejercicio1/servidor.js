const http = require("http");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bienvenido a mi servidor con Node.js");
});

servidor.listen(4000, () => {
  console.log("Servidor escuchando en http://localhost:4000");
});