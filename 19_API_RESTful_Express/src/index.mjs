import express from "express";
const productosRoutes = require("./routes/productos");
const app = express();

app.use(express.json());
app.use("/api/productos", productosRoutes);

app.listen(3000, () =>
  console.log("Servidor escuchando en http://localhost:3000")
);