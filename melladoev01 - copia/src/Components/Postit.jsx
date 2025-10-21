import React from "react";

export function Postit({ postitprops, funcionEnviada }) {
  return (
    <li className="col-xs-12 post-it" style={{ listStyle: "none" }}>
      <div>
        <h2>{postitprops.titulo}</h2>
        <p>{postitprops.desc}</p>
        <button
          onClick={() => funcionEnviada(postitprops.id)}
          className="btn btn-danger"
          title="Eliminar"
        >
          X
        </button>
      </div>
    </li>
  );
}
