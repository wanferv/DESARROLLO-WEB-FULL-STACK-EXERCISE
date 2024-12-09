// Componente funcional Tarjeta
const Tarjeta = (props) => {
    return (
      <div className="tarjeta">
        <h2>{props.titulo}</h2>
        <p>{props.descripcion}</p>
      </div>
    );
  };
  
  // Renderizando múltiples tarjetas
  ReactDOM.render(
    <div>
      <Tarjeta titulo="Aprende React" descripcion="¡React es una librería poderosa para crear interfaces dinámicas!" />
      <Tarjeta titulo="Usa Props" descripcion="Las props te permiten pasar datos entre componentes." />
      <Tarjeta titulo="Crea Componentes" descripcion="Los componentes son reutilizables y facilitan la organización." />
    </div>,
    document.getElementById("root")
  );
  