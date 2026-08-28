
export function Produto({ nome, preco, favoritado, onFavoritar}) {
  return (
    <div style={{ border: "1px solid black", width: "100px", padding: "10px" }}>
      <h2>{nome}</h2>
      <p>{preco}</p>
      <button onClick={onFavoritar}>
        {favoritado ? "Favoritado" : "Favoritar"}
      </button>
    </div>
  );
}