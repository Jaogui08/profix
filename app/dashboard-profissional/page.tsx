"use client"

import "./dashboardProfissional.css"
import { useEffect, useState } from "react";
import NavBarProfissional from "../components/NavBarProfissional";
import CardPedidosProfissional from "../components/CardPedidosProfissional";
import Footer from "../components/Footer";

export default function DashboardProfissional(){

    const [nomeProfissional, setNomeProfissional] = useState("");
    const [pedidos, setPedidos] = useState<any[]>([]);

    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");
        const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos") || "[]");

        setNomeProfissional(usuarioLogado.nome);
        setPedidos(pedidosGuardados);
    }, []);

    return(
        <section style={{backgroundColor: "#000000", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            <NavBarProfissional/>

            <div className="pro-header">
                <h1 style={{fontSize: "1.9rem"}}>Seja bem-vindo {nomeProfissional}!</h1>
                <h1>Pedidos em aberto:</h1>
            </div>

            <div className="pro-cards-container">
                {
                    pedidos.length === 0 ? (
                        <h1 style={{fontSize: "2rem", fontWeight: 600, marginTop: 20, marginBottom: 100, color: "#ffffff"}}>Nenhum pedido encontrado</h1>
                    ) : (
                        pedidos.map((pedido) => (
                            <CardPedidosProfissional 
                                key={pedido.id}
                                servico={pedido.servico}
                                dataCriacao={pedido.dataCriacao}
                                status={pedido.status}
                                descricao={pedido.descricao}
                                nome={pedido.nome}
                                telefone={pedido.telefone}
                                areaServico={pedido.areaServico} 
                                id={pedido.id} 
                            />
                        ))
                    )
                }
            </div>

            <Footer/>
        </section>
    );
}