Vamos a mejorar el proyecto base agregando funcionalidades y refinando la estructura para que sea más atractivo y útil para los estudiantes. El objetivo será hacer que este proyecto sea más interactivo, visualmente agradable y educativo.

---

### **Estructura Mejorada del Proyecto**

```plaintext
/blog-personal
├── /public
│   ├── /css
│   │   └── styles.css
│   ├── /js
│   │   └── script.js
│   └── /img
│       └── banner.jpg
├── /views
│   ├── home.ejs
│   ├── post.ejs
│   ├── about.ejs
│   └── contact.ejs
├── /routes
│   ├── index.js
│   ├── posts.js
│   └── contact.js
├── /models
│   └── post.js
├── server.js
├── package.json
└── README.md
```

---

### **Mejoras Incorporadas**

1. **Sistema de rutas modular**: Divide las rutas en archivos específicos para mantener un código limpio.
2. **Formulario funcional**: Incluye un formulario de contacto completamente funcional que envía mensajes al servidor.
3. **Elementos visuales mejorados**: Añade un banner y estilos más atractivos.
4. **Sistema de comentarios**: Los estudiantes podrán agregar comentarios directamente en las publicaciones.
5. **Búsqueda de publicaciones**: Filtrar por título de publicación desde la página principal.

---

### **Archivos Actualizados**

#### **1. Página Principal (`home.ejs`)**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog Personal</title>
    <link rel="stylesheet" href="/css/styles.css" />
  </head>
  <body>
    <header>
      <img src="/img/banner.jpg" alt="Banner del Blog" />
      <h1>Bienvenido a Mi Blog Personal</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/about">Sobre mí</a>
        <a href="/contact">Contacto</a>
      </nav>
    </header>
    <main>
      <section id="busqueda">
        <input type="text" id="buscar" placeholder="Buscar publicación..." />
      </section>
      <section id="publicaciones">
        <h2>Publicaciones Recientes</h2>
        <% posts.forEach(post => { %>
        <article>
          <h3><a href="/post/<%= post._id %>"><%= post.title %></a></h3>
          <p><%= post.summary %></p>
        </article>
        <% }) %>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 Blog Personal</p>
    </footer>
    <script src="/js/script.js"></script>
  </body>
</html>
```

---

#### **2. Estilos Mejorados (`styles.css`)**

```css
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #333;
}

header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

header h1 {
  text-align: center;
  color: #007bff;
  margin: 10px 0;
}

nav {
  display: flex;
  justify-content: center;
  background: #007bff;
  padding: 10px 0;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
}

#busqueda input {
  width: 80%;
  margin: 20px auto;
  display: block;
  padding: 10px;
  font-size: 16px;
}

#publicaciones article {
  background: white;
  border-radius: 8px;
  margin: 10px 0;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#publicaciones h3 a {
  color: #007bff;
  text-decoration: none;
}
```

---

#### **3. Interactividad con JavaScript (`script.js`)**

```javascript
const buscarInput = document.getElementById("buscar");
const publicaciones = document.querySelectorAll("#publicaciones article");

buscarInput.addEventListener("input", () => {
  const query = buscarInput.value.toLowerCase();
  publicaciones.forEach((pub) => {
    const titulo = pub.querySelector("h3 a").textContent.toLowerCase();
    pub.style.display = titulo.includes(query) ? "block" : "none";
  });
});
```

---

#### **4. Servidor (`server.js`)**

```javascript
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/posts");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = 3000;

// Configuración de MongoDB
mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configuración de EJS y archivos estáticos
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use("/", postRoutes);
app.use("/contact", contactRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

---

### **Instrucciones**

1. Clona el proyecto.
2. Instala dependencias con:
   ```bash
   npm install express mongoose body-parser ejs
   ```
3. Inicia MongoDB y crea la base de datos.
4. Ejecuta el servidor con:
   ```bash
   node server.js
   ```
5. Visita `http://localhost:3000` para interactuar con el proyecto.

---

### **Objetivo Mejorado**

Este proyecto ahora incluye:

- **Búsqueda interactiva en la página principal.**
- **Estilos visuales más atractivos.**
- **Un banner llamativo para destacar el blog.**
- **Un sistema modular que facilita el desarrollo y aprendizaje.**
