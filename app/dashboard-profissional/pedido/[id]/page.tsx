"use client";

import Footer from "@/app/components/Footer";
import "./pedidosProfissional.css"
import NavBarProfissional from "@/app/components/NavBarProfissional";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

    function atualizarStatus(){
        const pedidos = JSON.parse(localStorage.getItem("pedidos") || "[]");

        const pedidosAtualizados = pedidos.map((p: any) => {
            if (p.id === pedido.id) {
                if (p.status === "Aguardando orçamento") {
                    return {
                        ...p,
                        status: "Em andamento",
                    };
                }
                if (p.status === "Em andamento") {
                    return {
                        ...p,
                        status: "Concluído"
                    };
                }
            }

            return p;
        });

        localStorage.setItem("pedidos", JSON.stringify(pedidosAtualizados));

        const pedidoAtualizado = pedidosAtualizados.find((p: any) => p.id === pedido.id);

        setPedido(pedidoAtualizado);

        Swal.fire({
            title:
                pedido.status === "Aguardando orçamento"
                    ? "Serviço aceito!"
                    : "Serviço concluído!",
            text:
                pedido.status === "Aguardando orçamento"
                    ? "Um e-mail foi enviado para o cliente"
                    : "O serviço foi finalizado",
            icon: "success",
            confirmButtonColor: "#0ca8a8"
        });
    }

    let textoBotao = "";

    if (pedido.status === "Aguardando orçamento") {
        textoBotao = "Aceitar Serviço";
    } else if (pedido.status === "Em andamento") {
        textoBotao = "Marcar como Concluído";
    } else if (pedido.status === "Concluído") {
        textoBotao = "Serviço Concluído";
    }

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
                            <button 
                                className="pedidos-id-button"
                                onClick={atualizarStatus}
                                disabled={pedido.status === "Concluído"}>
                                {textoBotao}
                            </button>
                        </div>
                    </div>
                    <div className="pedidos-id-infos">
                        <h1>Detalhes do serviço</h1>
                        <div style={{display: "flex", flexDirection: "column", gap: 10, paddingInline: 70}}>
                            <p><b>Nome do cliente: </b>{pedido.nome}</p>
                            <p><b>Prazo do serviço: </b>{pedido.prazo}</p>
                            <p><b>Status do serviço: </b>{pedido.status}</p>
                            <p><b>E-mail do cliente: </b>{pedido.email}</p>
                            <p><b>Telefone do cliente: </b>{pedido.telefone}</p>
                            <p><b>CEP do cliente: </b>{pedido.cep}</p>
                            <div style={{lineHeight: 1.5}}>
                                <p><b>Descrição do pedido: </b></p>
                                <p>{pedido.descricao}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </section>
        
    );
}