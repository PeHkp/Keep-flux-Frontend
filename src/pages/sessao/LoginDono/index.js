import React,{useState} from 'react';

import { useHistory } from "react-router-dom"
import "../../../global.css"
import "./style.css"
import logoImg from "../../../assets/logo.png"

import api from "../../../services/api";

export default function Logon() {

  const [idDono,setIdDono] = useState('')
  const history = useHistory()

  async function handleLogin(e){
    e.preventDefault()

    try {

      const response = await api.post("login-dono",{idDono})
      localStorage.setItem('empresaId', idDono);
      
      localStorage.setItem("nomeEmpresa", response.data.name)
      console.log(response.data.name)

      history.push("painel-gerente")

    } catch (error) {
      alert("Falha no login de dono, tente novamente")
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
      <img src={logoImg} className="imgLogo" alt="Keep-Flux"></img>
      <form onSubmit={handleLogin}>
          <h1>Digite seu ID</h1>
          <input placeholder="Seu ID de Dono"
            value={idDono}
            onChange={e => setIdDono(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
        </form>
      </section>
    </div>
  );
}
