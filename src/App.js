import React, { useState } from "react";
import Cabecalho from "./components/cabecalho/cabecalho.js";
import Recursos from "./components/recursos/recursos.js";
import Acoes from "./components/acoes/acoes.js";

import "./App.css";

export default function App() {
  const handleClick = (e) => {
    const id = e.target.id;
    switch (id) {
      case "cortarBtn":
        setEstoque((prevState) => ({
          ...prevState,
          madeira: prevState.madeira + 1,
        }));
        break;
      default:
        break;
      case "venderBtn":
        if (estoque.madeira >= 1) {
          setEstoque((prevState) => ({
            ...prevState,
            madeira: prevState.madeira - 1,
            ouro: prevState.ouro + 1,
          }));
        }
        break;
    }
  };

  const [estoque, setEstoque] = useState({
    madeira: 0,
    ouro: 0,
  });

  return (
    <div className="App">
      <Cabecalho />
      <Recursos estoque={estoque} />
      <Acoes handleClick={handleClick} />
    </div>
  );
}
