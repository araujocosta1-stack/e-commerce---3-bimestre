import {useState}  from "react";
import NavBar  from "./components/Navbar.jsx";
import {Produto} from "./components/Produto.jsx";


export default function App() {
  const produtos = [
  { id: 1, name: "Vestido Floral", url: "https://images.unsplash.com/photo-1715852700550-6436320162e6?w=400&auto=format&fit=crop", de: "R$ 180,00", por: "R$ 140,00" },
  { id: 2, name: "Vestido Elegante", url: "https://images.unsplash.com/photo-1762395500105-988d1860c152?w=400&auto=format&fit=crop", de: "R$ 220,00", por: "R$ 180,00" },
  { id: 3, name: "Vestido de Festa", url: "https://images.unsplash.com/photo-1567290290527-b553f4d97960?w=400&auto=format&fit=crop", de: "R$ 250,00", por: "R$ 200,00" },
  ]
  const[favoritos, setFavoritos] = useState([]);
  function toggleFavorito(id){
    setFavoritos((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );

  }

  return (
  <>
    <NavBar totalFavoritos={favoritos.length} />
    <main className="grid-produtos" style={{ padding: "1rem" }}>
      {produtos.map((item) => (
        <Produto
          key={item.id}
          name={item.name}
          url={item.url}
          de={item.de}
          por={item.por}
          favoritado={favoritos.includes(item.id)}
          onFavoritar={() => toggleFavorito(item.id)}
        />
      ))}
    </main>
  </>
);
}