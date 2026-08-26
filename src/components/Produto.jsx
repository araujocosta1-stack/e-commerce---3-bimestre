import { Botao } from "./botao.jsx";

export function Produto({ nome, preco }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h2>{nome}</h2>
      <p>{preco}</p>
      <Botao />
    </div>
  );
}