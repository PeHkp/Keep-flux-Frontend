import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import "./style.css";

import logoImg from "../../assets/logo.png";

import api from "../../services/api";

export default function RelatorioM() {
  const [produtos, setProdutos] = useState([]);
  const [soma, setSoma] = useState([]);

  const history = useHistory();

  const empresaName = localStorage.getItem("nomeEmpresa");
  const empresaId = localStorage.getItem("empresaId");

  useEffect(() => {
    api
      .get("profile/pedido", {
        headers: {
          Authorization: empresaId,
        },
      })
      .then((response) => {
        setProdutos(response.data);
      });
  }, [empresaId]);
  
  useEffect(() => {
    api
      .get("/soma-total-pedidos-recebidos", {
        headers: {
          Authorization: empresaId,
        },
      })
      .then((response) => {
        setSoma(response.data[0]);
      });
  }, [empresaId]);

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Keep Flux" />
        <span>Bem vinda, {empresaName}</span>
        <Link className="button" to="/painel-gerente">
          Menu
        </Link>

        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041"></FiPower>
        </button>
      </header>
      <h1>Relatório</h1>

      <h1 className="Smargem">
        Ganho acumulado:{" "}
        {Intl.NumberFormat("py-BR", {
          style: "currency",
          currency: "BRL",
        }).format(soma.Valor)}
      </h1>
      <h1 className="Smargem">Total de pedidos realizados: {produtos.length}</h1>

      <ul>
        {produtos.map((e) => (
          <li key={e.id}>
            <strong>NOME DO CLIENTE :</strong>
            <p>{e.nome}</p>
            <strong>NOME DO PRODUTO :</strong>
            <p>{e.nomeDoProduto}</p>
            <strong>QUANTIDADE :</strong>
            <p>{e.quantidade}</p>
            <strong>PRECO :</strong>
            <p>
              {Intl.NumberFormat("py-BR", {
                style: "currency",
                currency: "BRL",
              }).format(e.value)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
