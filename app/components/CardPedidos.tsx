"use client"

import Swal from "sweetalert2";
import "./components.css"

type CardPedidosProps = {
    servico: string,
    dataCriacao: string,
    status: string,
    descricao: string;
    nome: string;
    telefone: string;
}

export default function CardPedidos({servico, dataCriacao, status, descricao, nome, telefone}: CardPedidosProps){

    const colorStatus = 
        status === "Aguardando orçamento" ? "#e2be08"
        
        : status === "Em andamento" ? "#2196f3"
        
        : status === "Concluído" ? "#4caf50"
        
        : "#f44336";

    function verDetalhes(){
        Swal.fire({
            title: servico,
            html: `
                <p><b>Status: </b>${status}</p>
                <p><b>Data de Criação: </b>${dataCriacao}</p>
                <p><b>Nome do Cliente: </b>${nome}</p>
                <p><b>Telefone Informado: </b>${telefone}</p>
                <br>
                <p><b>Descrição: </b></p>
                <p>${descricao}</p>
            `,
            customClass: {
                htmlContainer: "details-alert"
            },
            confirmButtonColor: "#0ca8a8",
            confirmButtonText: "Fechar",
            width: 600,
        });
    }

    return(
        <section className="card-pedidos">
            <div className="card-pedidos-text">
                <h1>{servico}</h1>
                <h1>Pedido realizado em: {dataCriacao}</h1>
                <h1>Status: <span style={{color: colorStatus}}>{status}</span></h1>
            </div>

            <div style={{display: "flex", justifyContent: "end"}}>
                <button onClick={verDetalhes} className="card-pedidos-button">
                    Ver Detalhes
                </button>
            </div>

        </section>
    );
}