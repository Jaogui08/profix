"use client"

import "./components.css"

type CardPedidosProps = {
    servico: string,
    dataCriacao: string,
    status: string,
}

export default function CardPedidos({servico, dataCriacao, status}: CardPedidosProps){
    return(
        <section className="card-pedidos">
            <div className="card-pedidos-text">
                <h1>{servico}</h1>
                <h1>Pedido realizado em: {dataCriacao}</h1>
                <h1>Status: {status}</h1>
            </div>

            <div style={{display: "flex", justifyContent: "end"}}>
                <button className="card-pedidos-button">
                    Ver Detalhes
                </button>
            </div>
        </section>
    );
}