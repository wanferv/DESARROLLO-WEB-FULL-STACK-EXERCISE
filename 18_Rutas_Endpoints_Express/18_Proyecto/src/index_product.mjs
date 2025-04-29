import express from "express";
const app = express();


const productos = [
  { id: 1, nombre: "Teléfono", precio: 500 },
  { id: 2, nombre: "Tablet", precio: 800 },
  { id: 3, nombre: "Laptop", precio: 1500 },
];

// Middleware global
app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  });

// Rutas

//C: Create (POST).
//R: Read (GET).
//U: Update (PUT).
//D: Delete (DELETE).

 //************************** C: Create (POST).. **************************
 app.post("/api/productos", (req, res) => {
  const nuevoProducto = req.body;
  productos.push({ ...nuevoProducto, id: productos.length + 1 });
  res.status(201).send("Producto agregado");
});
//************************** R: Read (GET).**************************
app.get("/api/productos", (req, res) => {
  res.json(productos);
});

 //************************** U: Update (PUT). **************************
app.put("/api/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;

  const producto = productos.find((p) => p.id === parseInt(id));
  if (!producto) return res.status(404).send("Producto no encontrado");

  producto.nombre = nombre;
  producto.precio = precio;

  res.send(producto);
});
 //************************** D: Delete (DELETE). **************************
app.delete("/api/productos/:id", (req, res) => {
  const { id } = req.params;

  const index = productos.findIndex((p) => p.id === parseInt(id));
  if (index === -1) return res.status(404).send("Producto no encontrado");

  const productoEliminado = productos.splice(index, 1);
  res.send(productoEliminado);
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