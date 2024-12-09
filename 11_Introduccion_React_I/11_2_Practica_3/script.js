// Componente Header
const Header = () => (
  <header>
    <h1>Mi Tienda</h1>
  </header>
);

// Componente Producto
const Producto = ({ nombre, precio }) => (
  <div className="producto">
    <h2>{nombre}</h2>
    <p>Precio: ${precio}</p>
  </div>
);

// Componente Footer
const Footer = () => (
  <footer>
    © 2024 Mi Tienda
  </footer>
);

// Componente principal App
const App = () => (
  <div>
    <Header />
    <Producto nombre="Camiseta" precio="20" />
    <Producto nombre="Pantalón" precio="40" />
    <Producto nombre="Zapatos" precio="60" />
    <Footer />
  </div>
);

// Renderizar la aplicación en el DOM
ReactDOM.render(<App />, document.getElementById("root"));
