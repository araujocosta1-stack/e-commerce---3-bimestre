function NavBar({ totalFavoritos }) {
  return (
    <nav
      style={{
        padding: "1rem 1.5rem",
        background: "linear-gradient(160deg, #f7d9dc 0%, #f2c6ce 100%)",
        color: "#5c3a3e",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "16px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.6rem",
          letterSpacing: "1px",
          margin: 0,
        }}
      >
        Closet das ANAS
      </h1>
      <span style={{ fontWeight: 500 }}>
        ❤️ Favoritos: {totalFavoritos}
      </span>
    </nav>
  );
}

export default NavBar;