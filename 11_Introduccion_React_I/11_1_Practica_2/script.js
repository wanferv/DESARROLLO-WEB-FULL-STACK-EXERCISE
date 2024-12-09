// Componente Header
const Header = () => {
    return (
      <header>
        <h1>Lista de Publicaciones</h1>
      </header>
    );
  };
  
  // Componente Publicacion
  const Publicacion = ({ title, body }) => {
    return (
      <div className="publicacion">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  };
  
  // Componente Principal (App)
  const App = () => {
    const [publicaciones, setPublicaciones] = React.useState([]);
  
    // Obtener datos de la API
    React.useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((response) => response.json())
        .then((data) => setPublicaciones(data))
        .catch((error) => console.error("Error al cargar publicaciones:", error));
    }, []);
  
    return (
      <div>
        <Header />
        <div className="publicaciones">
          {publicaciones.map((post) => (
            <Publicacion key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    );
  };
  
  // Renderizar en el DOM
  ReactDOM.render(<App />, document.getElementById("root"));  