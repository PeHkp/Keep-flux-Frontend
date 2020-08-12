import React,{useState} from 'react';
import { FiLogIn } from "react-icons/fi"
import { useHistory,Link } from "react-router-dom"
import "./style.css"
import "../../../global.css"
import heroImg from "../../../assets/heroes.png"
import logoImg from "../../../assets/logo.png"

import api from "../../../services/api";

export default function Logon() {

  const [id,setId] = useState('')
  const history = useHistory()

  async function handleLogin(e){
    e.preventDefault()

    try {
      const response = await api.post("login",{id})
      localStorage.setItem('empresaId', id);
      
      localStorage.setItem("nomeEmpresa", response.data.name)

      history.push("painel-vendedor")

    } catch (error) {
      alert("Falha no login, tente novamente")
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
      <img src={logoImg} className="imgLogo" alt="Keep-Flux"></img>
      <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>
          <input placeholder="Seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
          <Link to="/cadastro"><FiLogIn className="i" color="#e02041" size={18}/>Não tenho cadastro</Link>
        </form>
      </section>
      <img src={heroImg} alt="Heros"/>
    </div>
  );
}
