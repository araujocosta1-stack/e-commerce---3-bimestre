import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
export function Produto({ nome, preco, imagem, favoritado, onFavoritar }) {
  return (
    <div style={{ border: "1px solid black", width: "150px", padding: "10px" }}>
      
      <div style={{ textAlign: "right" }}>
        <button onClick={onFavoritar} style={{ background: "none", border: "none", cursor: "pointer" }}>
          {favoritado ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
        </button>
      </div>

      <div>
        <img src={imagem} alt={nome} style={{ width: "100%" }} />
      </div>

      <div>
        <p>{preco}</p>
      </div>

    </div>
  );
}