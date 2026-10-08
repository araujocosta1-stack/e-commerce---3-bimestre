import { useState, useEffect } from "react";
import NavBar from "./components/Navbar.jsx";
import { Produto } from "./components/Produto.jsx";

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch("https://6ac6591ebea0e72cf5c8eaf9.mockapi.io/Produtos")
      .then((response) => response.json())
      .then((data) => setProdutos(Array.isArray(data) ? data : []))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  function toggleFavorito(index) {
    setFavoritos((prev) =>
      prev.includes(index)
        ? prev.filter((favIndex) => favIndex !== index)
        : [...prev, index]
    );
  }

  return (
    <>
      <NavBar totalFavoritos={favoritos.length} />
      <main style={{ padding: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {produtos.map((item, index) => (
          <Produto
            key={index}
            name={item.name}
            url={item.url}
            de={item.de}
            por={item.por}
            favoritado={favoritos.includes(index)}
            onFavoritar={() => toggleFavorito(index)}
          />
        ))}
      </main>
    </>
  );
}