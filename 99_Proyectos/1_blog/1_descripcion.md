Aquí tienes un proyecto base diseñado para el nivel básico, desglosado por componentes y tecnologías necesarias. Se incluyen los archivos base de HTML, CSS y JavaScript, junto con instrucciones claras para trabajar con Node.js y MongoDB.

---

### **Estructura de Archivos**

```
/blog-personal
├── /public
│   ├── /css
│   │   └── styles.css
│   ├── /js
│   │   └── script.js
├── /views
│   ├── home.ejs
│   ├── post.ejs
│   ├── about.ejs
│   └── contact.ejs
├── server.js
├── package.json
└── README.md
```

---

### **Archivos Base**

#### **1. HTML - Página de Inicio (`home.ejs`)**

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
      <h1>Bienvenido a Mi Blog</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/about">Sobre mí</a>
        <a href="/contact">Contacto</a>
      </nav>
    </header>
    <main>
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
      <p>&copy; 2024 Mi Blog Personal</p>
    </footer>
  </body>
</html>
```

---

#### **2. CSS - Estilos Generales (`styles.css`)**

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
  color: #333;
}

header {
  background-color: #007bff;
  color: #fff;
  padding: 15px;
  text-align: center;
}

header nav a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
}

main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

article {
  margin-bottom: 20px;
}

footer {
  text-align: center;
  padding: 10px 0;
  background-color: #007bff;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
}
```

---

#### **3. JavaScript - Interactividad (`script.js`)**

```javascript
document.addEventListener("DOMContentLoaded", () => {
  console.log("Blog Personal: Interactividad lista");
});
```

---

#### **4. Servidor con Node.js (`server.js`)**

```javascript
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Configuración de base de datos
mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Esquema de publicaciones
const postSchema = new mongoose.Schema({
  title: String,
  summary: String,
  content: String,
});

const Post = mongoose.model("Post", postSchema);

// Configuración de EJS y body-parser
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas principales
app.get("/", async (req, res) => {
  const posts = await Post.find();
  res.render("home", { posts });
});

app.get("/post/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", { post });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

---

### **Indicaciones para los Estudiantes**

1. **Paso 1:** Clona o crea la estructura de directorios y archivos del proyecto.
2. **Paso 2:** Instala dependencias:
   ```bash
   npm install express mongoose body-parser ejs
   ```
3. **Paso 3:** Configura MongoDB. Usa `mongodb://localhost:27017/blogDB` para la conexión local.
4. **Paso 4:** Ejecuta el servidor:
   ```bash
   node server.js
   ```
5. **Paso 5:** Añade publicaciones directamente desde MongoDB (o con una herramienta como MongoDB Compass).

---

### **Objetivos de Aprendizaje**

1. **HTML:** Estructuración de contenido y uso de plantillas dinámicas.
2. **CSS:** Creación de un diseño responsivo y atractivo.
3. **JavaScript:** Validación y lógica para la interactividad.
4. **Node.js y Express:** Configuración básica de un servidor.
5. **MongoDB:** Gestión de datos persistentes.

Este proyecto les permitirá trabajar progresivamente desde conceptos básicos hasta el uso de herramientas más avanzadas.
