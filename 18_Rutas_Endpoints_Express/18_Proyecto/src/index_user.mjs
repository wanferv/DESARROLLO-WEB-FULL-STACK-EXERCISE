import express from "express";
const app = express();
 
const usuarios = [
  { id: 1, nombre: "Ana", correo: "ana@ejemplo.com" },
  { id: 2, nombre: "Luis", correo: "luis@ejemplo.com" },
];


// Middleware global
app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  });

// Rutas
app.get("/api/usuarios", (req, res) => res.json(usuarios));

app.get("/api/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).send("Usuario no encontrado");
  res.json(usuario);
});

app.post("/api/usuarios", (req, res) => {
  const nuevoUsuario = req.body;
  usuarios.push({ ...nuevoUsuario, id: usuarios.length + 1 });
  res.status(201).send("Usuario agregado");
});

// Ruta para simular un error
app.get("/error", (req, res) => {
  throw new Error("Error simulado");
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {

  console.error(err.message);
  res.status(500).send("Error del servidor. Estamos trabajando en ello.");
});

// Escuchar el servidor
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});