import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/sessao/Login"
import Register from "./pages/sessao/Register"
import LoginDono from "./pages/sessao/LoginDono"

import PainelVendedor from "./pages/paineis/PainelVendedor"
import PainelGerente from "./pages/paineis/PainelGerente"

import Help from "./pages/Help"
import RelatoriosRenda from "./pages/RelatoriosRenda"

import ListarProdutos from "./pages/produto/ListarProdutos"
import NovoProduto from "./pages/produto/NovoProduto"
import EditarProduto from "./pages/produto/EditarProduto"

import ListarClientes from "./pages/cliente/ListarClientes"
import Novocliente from "./pages/cliente/NovoCliente"
import Editarcliente from "./pages/cliente/EditarCliente"

import ListarPedidos from "./pages/pedido/ListarPedidos"
import NovoPedido from "./pages/pedido/NovoPedido"

import ListarEntregas from "./pages/entrega/ListarEntregas"
import NovoEntrega from "./pages/entrega/NovoEntrega"
import EditarEntrega from "./pages/entrega/EditarEntrega"

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" component={Register} />
          <Route path="/login-dono" component={LoginDono} />

          <Route path="/painel-vendedor" component={PainelVendedor} />
          <Route path="/painel-gerente" component={PainelGerente} />

          <Route path="/help" component={Help} />
          <Route path="/relatorios-renda" component={RelatoriosRenda} />

          <Route path="/produtos" component={ListarProdutos} />
          <Route path="/produto-editar" component={EditarProduto} />
          <Route path="/produto-novo" component={NovoProduto} />

          <Route path="/clientes" component={ListarClientes} />
          <Route path="/cliente-editar" component={Editarcliente} />
          <Route path="/cliente-novo" component={Novocliente} />

          <Route path="/entregas" component={ListarEntregas} />
          <Route path="/entrega-editar" component={EditarEntrega} />
          <Route path="/entrega-novo" component={NovoEntrega} />

          <Route path="/pedidos" component={ListarPedidos} />
          <Route path="/pedido-novo" component={NovoPedido} />
        </Switch>
      </BrowserRouter>
    );
  }