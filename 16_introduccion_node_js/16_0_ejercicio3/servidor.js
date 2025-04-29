const http = require("http");
const { mensaje } = require("./mensaje");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(mensaje);
});

servidor.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});