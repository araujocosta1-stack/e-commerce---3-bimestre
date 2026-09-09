import { FaHeart, FaRegHeart } from "react-icons/fa";

export function Produto({ name, url, de, por, favoritado, onFavoritar }) {
  return (
    <div
      style={{
        border: "none",
        width: "170px",
        padding: "14px",
        borderRadius: "16px",
        background: "#ffffff",
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
        fontFamily: "'Poppins', sans-serif",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <div style={{ textAlign: "right" }}>
        <button
          onClick={onFavoritar}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {favoritado ? (
            <FaHeart color="#e88ca0" size={22} />
          ) : (
            <FaRegHeart color="#d9a7ae" size={22} />
          )}
        </button>
      </div>

      <div>
        <img
          src={url}
          alt={name}
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </div>

      <p
        style={{
          fontWeight: 600,
          color: "#5c3a3e",
          margin: "10px 0 4px 0",
          fontSize: "0.95rem",
        }}
      >
        {name}
      </p>

      <div>
        <p
          style={{
            textDecoration: "line-through",
            color: "#b7a6a2",
            margin: 0,
            fontSize: "0.85rem",
          }}
        >
          {de}
        </p>
        <p
          style={{
            fontWeight: 600,
            color: "#5c3a3e",
            margin: 0,
            fontSize: "1rem",
          }}
        >
          {por}
        </p>
      </div>
    </div>
  );
}