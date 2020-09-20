import React, { useState } from "react";
import "./style.css";
import logoImg from "../../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { mask, unMask } from "remask";
import api from "../../../services/api";

export default function ClienteNew() {
  const [cpfDoComprador, setcpf] = useState("");
  const [nomeDoProduto, setnomeP] = useState("");
  const [valor, setNumero] = useState("");
  const [formaPagamento, setformaPagamento] = useState("");
  const [quantidade, setquantidade] = useState("");

  const history = useHistory();
  const empresaId = localStorage.getItem("empresaId");

  async function newCliente(e) {
    e.preventDefault();

    if (cpfDoComprador === null || cpfDoComprador === "") {
      alert("Preencha o cpf Do Comprador")
      return
    }
    if (nomeDoProduto === null || nomeDoProduto === "") {
      alert("Preencha o nome do produto")
      return
    }
    if (valor <= 0) {
      alert("O preço deve ser maior que 0")
      return
    }
    if (formaPagamento === null || formaPagamento === "") {
      alert("Adicione uma Forma de pagamento")
      return
    }
    if (quantidade <= 0) {
      alert("a quantidade deve ser maior que 0")
      return
    }

    const data = {
      cpfDoComprador,
      nomeDoProduto,
      valor,
      formaPagamento,
      quantidade,
    };

    try {
      await api.post("pedido", data, {
        headers: {
          Authorization: empresaId,
        },
      });

      history.push("/pedidos");
    } catch (error) {
      alert("Erro ao cadastrar Pedido");
    }
  }

  return (
    <div className="new-vaga-container">
      <div className="conteiner">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Novo Pedido</h1>
          <p>Coloque os dados do cliente e do produto comprado.</p>
          <Link className="back-link" to="/pedidos">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={newCliente}>
          <input
            value={cpfDoComprador}
            onChange={(e) =>
              setcpf(mask(unMask(e.target.value), ["999.999.999-99"]))
            }
            placeholder="CPF do Cliente"
          />
          <input
            value={nomeDoProduto}
            onChange={(e) => setnomeP(e.target.value)}
            placeholder="Nome do produto"
          />
          <input
            value={valor}
            type="number"
            onChange={(e) => setNumero(e.target.value)}
            placeholder="Preço do pedido"
          />
          <select
            value={formaPagamento}
            onChange={(e) => setformaPagamento(e.target.value)}
          >
            <option value="">Forma de pagamento</option>
            <option value="Debito">Debito</option>
            <option value="Credito">Credito</option>
            <option value="A Vista">A Vista</option>
            <option value="Transferencia">Transferencia</option>
          </select>

          <input
            value={quantidade}
            type="number"
            onChange={(e) => setquantidade(e.target.value)}
            placeholder="Quantidade do produto"
          />

          <button className="button" type="submit">
            Fazer Pedido
          </button>
        </form>
      </div>
    </div>
  );
}
