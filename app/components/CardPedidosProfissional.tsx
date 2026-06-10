"use client"

import Swal from "sweetalert2";
import "./componentsProfissional.css"
import Link from "next/link";

type CardPedidosProfissionalProps = {
    id: number,
    servico: string,
    areaServico: string,
    dataCriacao: string,
    status: string,
    descricao: string;
    nome: string;
    telefone: string;
}

export default function CardPedidosProfissional({id, servico, areaServico, dataCriacao, status, descricao, nome, telefone}: CardPedidosProfissionalProps){

    const colorStatus = 
    status === "Aguardando orçamento" ? "#e2be08"
    
    : status === "Em andamento" ? "#2196f3"
    
    : status === "Concluído" ? "#4caf50"
    
    : "#f44336";
    
    const imagens = {
        "Informática": "/informatica02.png",
        "Hardware": "/hardware02.png",
        "Elétrica": "/eletrica02.png",
        "Redes": "/redes02.png",
    };

    const imagemServico = imagens[areaServico as keyof typeof imagens];

    return(
        <section className="pro-pedidos-card">
            <div className="pro-pedidos-title">
                <div className="pro-pedidos-img">
                    <img style={{width: 250}} src={imagemServico}/>
                </div>
                <h1 style={{marginBottom: 10}}>{servico}</h1>
                <h1>Data de Criação: {dataCriacao}</h1>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <Link href={`/dashboard-profissional/pedido/${id}`} className="pro-pedidos-button">
                    Abrir Detalhes
                </Link>
            </div>

        </section>
    );
}