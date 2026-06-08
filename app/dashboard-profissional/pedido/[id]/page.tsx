"use client";

import "./pedidos.css"
import NavBarProfissional from "@/app/components/NavBarProfissional";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetalhesPedido() {

    const params = useParams();
    const [pedido, setPedido] = useState<any>(null);

    useEffect(() => {

        const pedidos = JSON.parse(
            localStorage.getItem("pedidos") || "[]"
        );

        const pedidoEncontrado = pedidos.find(
            (p: any) => p.id === Number(params.id)
        );

        setPedido(pedidoEncontrado);

    }, [params.id]);
    
    if (!pedido) {
        return (
            <h1>Pedido não encontrado.</h1>
        );
    }
    
    const imagens = {
        "Informática": "/informatica02.png",
        "Hardware": "/hardware02.png",
        "Elétrica": "/eletrica02.png",
        "Redes": "/redes02.png",
    };

    const imagemServico = imagens[pedido.areaServico as keyof typeof imagens];

    return (
        <section style={{backgroundColor: "#000000"}}>
            <NavBarProfissional/>

            <div style={{display: "flex", justifyContent: "center"}}>
                <div className="pedidos-id-cont">
                    <div className="pedidos-id-header">
                        <div className="pedidos-id-img">
                            <img style={{width: 260}} src={imagemServico}/>
                        </div>
                        <div className="pedidos-id-header-2">
                            <h1>{pedido.servico}</h1>
                            <h1 style={{fontSize: "1.8rem", marginTop: 20}}>Data de Criação: {pedido.dataCriacao}</h1>
                            <button className="pedidos-id-button">Aceitar Serviço</button>
                        </div>
                    </div>
                    <div className="pedidos-id-infos">
                        <h1>Detalhes do serviço</h1>
                        <div>
                            <p>Nome do cliente: {pedido.nome}</p>
                            <p>Prazo do serviço: {pedido.prazo}</p>
                            <p>E-mail do cliente: {pedido.email}</p>
                            <p>Telefone do cliente: {pedido.telefone}</p>
                            <p>CEP do cliente: {pedido.cep}</p>
                            <p>Descrição do pedido: </p>
                            <p>{pedido.descricao}</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
    );
}