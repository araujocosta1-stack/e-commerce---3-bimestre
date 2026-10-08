import { FaHeart, FaRegHeart } from "react-icons/fa";

export function Produto({ name, url, de, por, favoritado, onFavoritar }) {
  return (
    <div style={{ border: "1px solid black", width: "150px", padding: "10px" }}>

      <div style={{ textAlign: "right" }}>
        <button onClick={onFavoritar} style={{ background: "none", border: "none", cursor: "pointer" }}>
          {favoritado ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
        </button>
      </div>

      <div>
        <img src={url} alt={name} style={{ width: "100%" }} />
      </div>

      <div>
        <p style={{ textDecoration: "line-through", color: "gray", margin: 0 }}>
          De: {de}
        </p>
        <p style={{ fontWeight: "bold", margin: 0 }}>
          Por: {por}
        </p>
      </div>

    </div>
  );
}