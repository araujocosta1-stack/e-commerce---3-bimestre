function NavBar({ totalFavoritos }) {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff", display: "flex", justifyContent: "space-between" }}>
      <h1>Minha Loja</h1>
      <span>❤️ Favoritos: {totalFavoritos}</span>
    </nav>
  );
}

export default NavBar;