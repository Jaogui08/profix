"use client";

import NavBarProfissional from "@/app/components/NavBarProfissional";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetalhesPedido() {

    const params = useParams();
    const pedidos = JSON.parse(localStorage.getItem("pedidos") || "[]");
    const pedido = pedidos.find((p: any) => p.id === Number(params.id));

    if (!pedido) {
        return (
            <h1>Pedido não encontrado.</h1>
        );
    }

    return (
        <section style={{backgroundColor: "#000000"}}>
            <NavBarProfissional/>

            <div>
                <h1>Detalhes do Pedido</h1>

                <p>ID recebido: {pedido.servico}</p>

                <p>{params.id}</p>
            </div>
        </section>
        
    );
}