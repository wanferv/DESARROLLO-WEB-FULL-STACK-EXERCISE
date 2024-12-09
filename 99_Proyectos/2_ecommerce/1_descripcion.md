### Proyecto Base: Tienda Online Simple

El objetivo es proporcionar un proyecto base que sirva como una introducción al desarrollo de una tienda en línea con funcionalidades básicas. A continuación, se detallan los archivos y la estructura del proyecto con los requerimientos mencionados.

---

### **Estructura del Proyecto**

```plaintext
/tienda-online
├── /public
│   ├── /css
│   │   └── styles.css
│   ├── /js
│   │   ├── script.js
│   │   └── carrito.js
│   └── /img
│       ├── producto1.jpg
│       ├── producto2.jpg
│       └── producto3.jpg
├── /views
│   ├── home.ejs
│   ├── product.ejs
│   ├── carrito.ejs
│   ├── login.ejs
│   └── register.ejs
├── /routes
│   ├── index.js
│   ├── product.js
│   ├── user.js
│   └── carrito.js
├── /models
│   ├── product.js
│   ├── user.js
│   └── order.js
├── server.js
├── package.json
└── README.md
```

---

### **Mejoras Incluidas**

1. **Interfaz amigable y responsive**: Se incluye un diseño básico pero atractivo y adaptable a dispositivos móviles.
2. **Carrito funcional**: Los estudiantes podrán agregar productos al carrito y calcular totales.
3. **Formulario de registro y login**: Con validación básica en el cliente y conexión con MongoDB.
4. **Checkout básico**: Una página para simular el proceso de pago.
5. **Rutas claras y organizadas**: Separa el servidor en rutas específicas para productos, usuarios y el carrito.

---

### **Archivos Clave**

#### **1. Página de Inicio (`home.ejs`)**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tienda Online</title>
    <link rel="stylesheet" href="/css/styles.css" />
  </head>
  <body>
    <header>
      <h1>Tienda Online</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/carrito">Carrito</a>
        <a href="/login">Login</a>
      </nav>
    </header>
    <main>
      <section id="productos">
        <h2>Productos Destacados</h2>
        <div class="producto">
          <img src="/img/producto1.jpg" alt="Producto 1" />
          <h3>Producto 1</h3>
          <p>$10.00</p>
          <button data-id="1">Agregar al Carrito</button>
        </div>
        <div class="producto">
          <img src="/img/producto2.jpg" alt="Producto 2" />
          <h3>Producto 2</h3>
          <p>$15.00</p>
          <button data-id="2">Agregar al Carrito</button>
        </div>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 Tienda Online</p>
    </footer>
    <script src="/js/carrito.js"></script>
  </body>
</html>
```

---

#### **2. Estilos Mejorados (`styles.css`)**

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 10px 0;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

#productos {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.producto {
  background: white;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

---

#### **3. Interactividad con JavaScript (`carrito.js`)**

```javascript
const botonesAgregar = document.querySelectorAll("button[data-id]");
const carrito = [];

botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const productoId = boton.dataset.id;
    const productoNombre =
      boton.previousElementSibling.previousElementSibling.textContent;
    const productoPrecio = parseFloat(
      boton.previousElementSibling.textContent.slice(1)
    );

    carrito.push({
      id: productoId,
      nombre: productoNombre,
      precio: productoPrecio,
    });
    alert(`${productoNombre} agregado al carrito`);
  });
});
```

---

#### **4. Servidor Básico (`server.js`)**

```javascript
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/tiendaDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configuraciones
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use("/", require("./routes/index"));
app.use("/carrito", require("./routes/carrito"));
app.use("/login", require("./routes/user"));

// Servidor
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
```

---

#### **5. Modelo de Producto (`models/product.js`)**

```javascript
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  imagen: String,
});

module.exports = mongoose.model("Product", productSchema);
```

---

### **Instrucciones para los Estudiantes**

1. **Instalar dependencias**:
   ```bash
   npm install express mongoose body-parser ejs
   ```
2. **Iniciar MongoDB**.
3. **Ejecutar el servidor**:
   ```bash
   node server.js
   ```
4. **Visitar `http://localhost:3000` para explorar la tienda**.

---

### **Lo que Aprenderán los Estudiantes**

1. **HTML y CSS**: Crear y estilizar páginas web.
2. **JavaScript**: Añadir funcionalidad como un carrito de compras interactivo.
3. **Node.js**: Configurar un servidor básico y manejar rutas.
4. **MongoDB**: Almacenar productos, usuarios y órdenes.
5. **Modularización**: Mantener un código limpio y organizado.

Este proyecto base está diseñado para crecer con ellos a medida que avanzan en el bootcamp. 🚀
