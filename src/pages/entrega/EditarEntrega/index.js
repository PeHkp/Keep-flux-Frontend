import React , { useState } from 'react';
import "./style.css"
import logoImg from "../../../assets/logo.png";
import { Link ,  useHistory  } from "react-router-dom"
import {FiArrowLeft} from "react-icons/fi"
import { mask, unMask } from 'remask'

import api from "../../../services/api"

export default function EntregaEdit() {
  
  
  const [dataEntrega, setdataEntrega] = useState("")
  const [observacao,setobservacao] = useState("")
  const history = useHistory()
  const idEntrega = localStorage.getItem("idEntrega");

  async function edt(e){
    e.preventDefault()

    if (dataEntrega === null || dataEntrega === "") {
      alert("Preencha a data de entrega")
      return
    }
    if (observacao === null || observacao === "") {
      alert("Preencha a observacao")
      return
    }

    const data = {
        dataEntrega,
        observacao
    }

    try {
      await api.put(`entrega/${idEntrega}`,data)

      history.push("/entregas")
    } catch (error) {
      alert("Erro ao cadastrar Entrega")
    }

  }

  return (
    <div className="new-vaga-container">
      <div className="conteiner">
        <section>
          <img src={logoImg} alt="Keep-Flux" />
          <h1>Editar Entrega</h1>
          <p>
            Altera a data de entrega ou a observação sobre essa entrega.
          </p>
          <Link className="back-link" to="/entregas">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={edt}>

            <input 
            value={dataEntrega}
            onChange={e => setdataEntrega(mask(unMask(e.target.value),['99/99/9999']))}
              placeholder="Nova data de entrega"/>   
              <input 
            value={observacao}
            onChange={e => setobservacao(e.target.value)}
              placeholder="Nova observação"/>           
            

        <button className="button" type="submit">Editar</button>
        </form>
      </div>
    </div>
  );
}