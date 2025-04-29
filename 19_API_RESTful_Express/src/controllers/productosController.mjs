const productos = [
    { id: 1, nombre: "Teléfono", precio: 500 },
    { id: 2, nombre: "Tablet", precio: 800 },
  ];
  
  const obtenerProductos = (req, res) => res.json(productos);
  
  const agregarProducto = (req, res) => {
    const nuevoProducto = req.body;
    productos.push({ ...nuevoProducto, id: productos.length + 1 });
    res.status(201).send("Producto agregado");
  };
  
  module.exports = { obtenerProductos, agregarProducto };