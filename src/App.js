import React, { useState } from "react";
import Cabecalho from "./components/cabecalho/cabecalho.js";
import Recursos from "./components/recursos/recursos.js";
import Acoes from "./components/acoes/acoes.js";
import Rodape from "./components/rodapé/rodape.js";

import "./App.css";

export default function App() {
  const handleClick = (e) => {
    const id = e.target.id;
    switch (id) {
      case "cortarBtn":
        setEstoque((prevState) => ({
          ...prevState,
          madeira: prevState.madeira + transacoes.cortar.madeira,
        }));
        break;
      default:
        break;
      case "venderBtn":
        if (estoque.madeira >= transacoes.vender.madeira * -1) {
          setEstoque((prevState) => ({
            ...prevState,
            madeira: prevState.madeira + transacoes.vender.madeira,
            ouro: prevState.ouro + transacoes.vender.ouro,
          }));
        }
        break;
      case "construirBtn":
        if (
          estoque.madeira >= transacoes.construir.madeira * -1 &&
          estoque.ouro >= transacoes.construir.ouro * -1
        ) {
          setEstoque((prevState) => ({
            ...prevState,
            madeira: prevState.madeira + transacoes.construir.madeira,
            ouro: prevState.ouro + transacoes.construir.ouro,
            casa: prevState.casa + transacoes.construir.casa,
          }));
        }
        break;
      case "contratarLenhadorBtn":
        if (
          estoque.ouro >= transacoes.contratarLenhador.ouro * -1 &&
          estoque.casa >= transacoes.contratarLenhador.casa * -1
        ) {
          setEstoque((prevState) => ({
            ...prevState,
            ouro: prevState.ouro + transacoes.contratarLenhador.ouro,
            casa: prevState.casa + transacoes.contratarLenhador.casa,
            trabalhador:
              prevState.trabalhador + transacoes.contratarLenhador.trabalhador,
          }));
        }
        break;
    }
  };

  const [estoque, setEstoque] = useState({
    madeira: 0,
    ouro: 0,
    casa: 0,
    trabalhador: 0,
    comerciante: 0
  });

   // Guarda velocidade dos processos
   const [processos, setProcessos] = useState({
    cortar: 1,
    vender: 1
  });


  const [transacoes, setTransacoes] = useState({
    cortar: { madeira: 1 },
    vender: { madeira: -1, ouro: 1 },
    construir: { madeira: -5, ouro: -5, casa: +1 },
    contratarLenhador: { ouro: -10, casa: -1, trabalhador: 1 },
  });

  return (
    <div className="App">
      <Cabecalho />
      <Recursos estoque={estoque} />
      <Acoes transacoes={transacoes} handleClick={handleClick} />
      <Rodape estoque={estoque} transacoes={transacoes} processos={processos} />    
    </div>
  );
}
