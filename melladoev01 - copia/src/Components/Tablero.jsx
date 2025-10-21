import React, { Fragment, useRef, useState } from "react";
import { Postit } from "./Postit";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

export function Tablero() {
  // inicializa con ids para que el borrado funcione desde el inicio
  const [listadoPostit, setPostit] = useState(() => [
    { id: uuidv4(), titulo: "Certamen", desc: "tengo que estudiar para el certamen" },
    { id: uuidv4(), titulo: "Tesis", desc: "tengo que avanzar en la tesis" },
    { id: uuidv4(), titulo: "Dormir", desc: "tengo que dormir mas temprano, antes de las 2am" },
    { id: uuidv4(), titulo: "Limpiar", desc: "tengo que limpiar mi pieza" },
  ]);

  const inputPostit = useRef();
  const inputDesc = useRef();

  const agregarPostit = () => {
    const inputPostitTexto = inputPostit.current.value?.trim();
    const inputDescTexto = inputDesc.current.value?.trim();

    if (!inputPostitTexto) return; // simple guard

    setPostit((prev) => [
      ...prev,
      { id: uuidv4(), titulo: inputPostitTexto, desc: inputDescTexto || "" },
    ]);

    inputPostit.current.value = "";
    inputDesc.current.value = "";
  };

  const eliminarPostit = (id) => {
    setPostit((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Fragment>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Post it simulator</h1>
        <hr />
        <div className="input-group">
          <input ref={inputPostit} className="form-control" type="text" placeholder="Ingrese titulo" />
          <input ref={inputDesc} className="form-control" type="text" placeholder="Descripcion" />
          <button onClick={agregarPostit} className="btn btn-success">Agregar</button>
        </div>

        <ul className="row" style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
          {listadoPostit.map((postitActual) => (
            <Postit
              key={postitActual.id}
              postitprops={postitActual}
              funcionEnviada={eliminarPostit}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
