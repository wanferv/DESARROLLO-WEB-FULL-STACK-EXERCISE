// Componente Header
const Header = () => {
    return (
      <header>
        <h1>Mi Perfil</h1>
      </header>
    );
  };
  
  // Componente de Encabezado del Perfil
  const ProfileHeader = () => {
    return (
      <div className="profile-header">
        <img src="https://via.placeholder.com/50" alt="Foto de Perfil" />
        <h2>Wanferv</h2>
      </div>
    );
  };
  
  // Componente Principal (App)
  const App = () => {
    return (
      <div>
        <Header />
        <ProfileHeader />
      </div>
    );
  };
  
  // Renderizar la Aplicación en el DOM
  ReactDOM.render(<App />, document.getElementById("root"));  