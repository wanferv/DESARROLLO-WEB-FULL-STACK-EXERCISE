Aquí tienes un **proyecto base** para una **aplicación de tareas** que los estudiantes pueden desarrollar y completar progresivamente. Este proyecto combina funcionalidad básica con una estructura clara, útil para un bootcamp de nivel básico.

---

## **Estructura del Proyecto**

```plaintext
/todo-app
├── /public
│   ├── /css
│   │   └── styles.css
│   ├── /js
│   │   └── script.js
├── /views
│   ├── index.ejs
│   └── error.ejs
├── /routes
│   ├── index.js
│   └── api.js
├── /models
│   └── task.js
├── server.js
├── package.json
└── README.md
```

---

## **Primera Etapa: Crear la Página de Inicio**

Archivo: **`index.ejs`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gestor de Tareas</title>
    <link rel="stylesheet" href="/css/styles.css" />
  </head>
  <body>
    <header>
      <h1>Gestor de Tareas</h1>
    </header>
    <main>
      <form id="form-tarea">
        <input
          type="text"
          id="nueva-tarea"
          placeholder="Añadir una tarea..."
          required
        />
        <button type="submit">Añadir</button>
      </form>
      <section id="lista-tareas">
        <h2>Mis Tareas</h2>
        <ul id="tareas">
          <!-- Aquí se cargarán las tareas -->
        </ul>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 Mi Gestor de Tareas</p>
    </footer>
    <script src="/js/script.js"></script>
  </body>
</html>
```

---

## **Segunda Etapa: Estilizar la Aplicación**

Archivo: **`styles.css`**

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
  padding: 1rem 0;
}

header h1 {
  margin: 0;
}

main {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

form {
  display: flex;
  margin-bottom: 1rem;
}

form input {
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
}

form button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}

#lista-tareas {
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}

li:last-child {
  border-bottom: none;
}

li.completed {
  text-decoration: line-through;
  color: #999;
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
}

button:hover {
  background-color: darkred;
}
```

---

## **Tercera Etapa: Añadir Funcionalidad con JavaScript**

Archivo: **`script.js`**

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const formTarea = document.getElementById("form-tarea");
  const nuevaTarea = document.getElementById("nueva-tarea");
  const listaTareas = document.getElementById("tareas");

  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  const renderTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, index) => {
      const li = document.createElement("li");
      li.className = tarea.completada ? "completed" : "";
      li.innerHTML = `
        <span>${tarea.texto}</span>
        <div>
          <button class="completar" data-index="${index}">✔</button>
          <button class="eliminar" data-index="${index}">✖</button>
        </div>
      `;
      listaTareas.appendChild(li);
    });
  };

  const guardarTareas = () => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  };

  formTarea.addEventListener("submit", (e) => {
    e.preventDefault();
    tareas.push({ texto: nuevaTarea.value, completada: false });
    nuevaTarea.value = "";
    guardarTareas();
    renderTareas();
  });

  listaTareas.addEventListener("click", (e) => {
    if (e.target.classList.contains("completar")) {
      const index = e.target.dataset.index;
      tareas[index].completada = !tareas[index].completada;
    } else if (e.target.classList.contains("eliminar")) {
      const index = e.target.dataset.index;
      tareas.splice(index, 1);
    }
    guardarTareas();
    renderTareas();
  });

  renderTareas();
});
```

---

## **Cuarta Etapa: Crear el Servidor**

Archivo: **`server.js`**

```javascript
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Rutas principales
app.get("/", (req, res) => res.render("index"));

// Servidor
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
```

---

### **Características Adicionales**

1. **Persistencia Local**: El uso de `localStorage` permite que los estudiantes vean cómo guardar datos localmente.
2. **Interactividad**: Editar, eliminar y marcar tareas enseña cómo manejar eventos dinámicamente.
3. **Progresividad**: La conexión con un backend y una base de datos puede ser una etapa posterior.

### **Instrucciones de Instalación**

Archivo: **`README.md`**

````markdown
# Proyecto Gestor de Tareas

## Descripción

Una aplicación simple para gestionar tareas diarias.

## Instrucciones

1. Clona el repositorio:
   ```bash
   git clone <URL>
   cd todo-app
   ```
````

2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   node server.js
   ```
4. Accede a la aplicación:
   - Abre tu navegador en `http://localhost:3000`.

## Funcionalidades

- Agregar tareas.
- Marcar tareas como completadas.
- Eliminar tareas.

```

---

Con esta mejora, el proyecto tiene un balance ideal entre complejidad y aprendizaje práctico. ¿Qué opinas?
```
