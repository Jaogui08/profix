"use client"

import Footer from "@/app/components/Footer";
import "./pedidos.css";
import NavBar from "@/app/components/NavBar";
import CardPedidos from "@/app/components/CardPedidos";
import { useEffect, useState } from "react";

export default function MeusPedidos(){
    
    const [pedidos, setPedidos] = useState<any[]>([]);

    useEffect(() => {
        const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos") || "[]");

        setPedidos(pedidosGuardados);
    }, []);

    return(
        <section style={{backgroundColor: "#000000", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            <NavBar/>

            <div style={{display: "flex", justifyContent: "center", flex: 1}}>
                <div className="pedidos-cont">
                    <div className="pedidos-cont-2">
                        
                        {
                            pedidos.length === 0 ? (
                                <h1 style={{fontSize: "2rem", fontWeight: 600, marginTop: 20, marginBottom: 100}}>Nenhum pedido encontrado</h1>
                            ) : (
                                pedidos.map((pedido) => (
                                    <CardPedidos
                                        key={pedido.id}
                                        servico={pedido.servico}
                                        dataCriacao={pedido.dataCriacao}
                                        status={pedido.status} 
                                        descricao={pedido.descricao} 
                                        nome={pedido.nome} 
                                        telefone={pedido.telefone} 
                                    />
                                ))
                            )
                        }

                    </div>
                </div>
            </div>

            <Footer/>
        </section>
    );
}