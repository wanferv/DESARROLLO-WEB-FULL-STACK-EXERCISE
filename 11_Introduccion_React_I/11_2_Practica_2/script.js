// Componente funcional Tarjeta
const Tarjeta = ({ titulo, descripcion, autor }) => {
  return (
    <div className="tarjeta">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <p className="autor">Publicado por: {autor}</p>
    </div>
  );
};

// Datos de ejemplo simulando publicaciones
const publicaciones = [
  { titulo: "JavaScript Rocks", descripcion: "Explora el mundo de JavaScript con estos tips.", autor: "Juan Pérez" },
  { titulo: "React es genial", descripcion: "Aprende a construir interfaces dinámicas con React.", autor: "María López" },
  { titulo: "CSS es arte", descripcion: "Descubre cómo diseñar páginas web impactantes.", autor: "Carlos Díaz" },
];

// Renderizar una lista de publicaciones
ReactDOM.render(
  <div>
    {publicaciones.map((pub, index) => (
      <Tarjeta key={index} titulo={pub.titulo} descripcion={pub.descripcion} autor={pub.autor} />
    ))}
  </div>,
  document.getElementById("root")
);
