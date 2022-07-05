function Header({ setHome }) {
  return (
    <div className="header">
      <nav>
        <h2>Nu Kenzie</h2>
        <button
          onClick={() => {
            setHome(true);
          }}
        >
          Inicio
        </button>
      </nav>
    </div>
  );
}

export default Header;
