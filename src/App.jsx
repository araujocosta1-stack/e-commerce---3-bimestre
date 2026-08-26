import { NavBar } from "./components/Navbar.jsx";
import { Produto } from "./components/Produto.jsx";


export default function App() {
  const produtos = [
    { id: 1, nome: "Camiseta", preco: "R$ 50,00" },
    { id: 2, nome: "Calça Jeans", preco: "R$ 120,00" },
    { id: 3, ne: "Tênis", preco: "R$ 200,00" }
  ];

  return (
    <>
      <NavBar/>
      <main style={{ padding: "1rem" }}>
        {produtos.map( (item) => (
          <Produto key={item.id} nome={item.nome} preco={item.preco} />
        ))}
      </main>
  
    </>
  );
}