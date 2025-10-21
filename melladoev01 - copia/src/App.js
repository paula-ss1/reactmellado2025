import React from "react";
import ReactDOM from "react-dom/client";
//import "./style.css";

import "./bootstrap.min.css";
import {Tablero} from "./Components/Tablero";
import {Postit} from "./Components/Postit";

export function App(){
    return(
        <Tablero></Tablero>
    )
}