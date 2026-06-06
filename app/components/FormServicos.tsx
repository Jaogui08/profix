"use client"

import { useState } from "react";
import "./components.css"
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

type FormServicosProps = {
    servico: string,
    areaServico: string,
}

export default function FormServicos({servico, areaServico}: FormServicosProps){
    
    const [descricao, setDescricao] = useState("");
    const [prazo, setPrazo] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");

    const router = useRouter();

    function enviarPedido(e: React.FormEvent) {
        e.preventDefault();

        const pedidos = JSON.parse(localStorage.getItem("pedidos") || "[]");

        const novoPedido = {
            id: Date.now(),
            servico,
            areaServico,
            descricao,
            prazo,
            nome,
            telefone,
            email,
            cep,
            status: "Aguardando orçamento",
            dataCriacao: new Date().toLocaleDateString("pt-BR"),
            timestamp: Date.now(),
        };

        pedidos.push(novoPedido);

        localStorage.setItem("pedidos", JSON.stringify(pedidos));

        Swal.fire({
            title: "Pedido enviado com sucesso!",
            text: "Em breve um profissional entrará em contato",
            icon: "success",
            confirmButtonColor: "#098a8a"
        }).then(() => {
            setDescricao("");
            setPrazo("");
            setNome("");
            setTelefone("");
            setEmail("");
            setCep("");
            
            router.push("/dashboard")
        });

    }

    return(
        <section style={{display: "flex", justifyContent: "center"}}>
            <div className="services-form-cont">
                <form onSubmit={enviarPedido} className="services-form-cont-2">
                    <h1>Explique o que você precisa</h1>

                    <div className="services-form-input">
                        <label>Detalhe seu pedido</label>
                        <textarea 
                            style={{height: 300}}
                            placeholder="Traga todos os detalhes do seu pedido"
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                            required 
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div className="services-form-input">
                        <label>Para quando você precisa desse serviço?</label>
                        <input 
                            type="text"
                            placeholder="Ex: Para semana que vem"
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                            required 
                            value={prazo}
                            onChange={(e) => setPrazo(e.target.value)}
                        />
                    </div>

                    <div className="services-form-input">
                        <label>Informe seu nome</label>
                        <input 
                            type="text"
                            placeholder="Ex: João da Silva"
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                            required 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="services-form-input">
                        <label>Informe seu telefone</label>
                        <input 
                            type="text"
                            placeholder="Ex: (11) 99999-9999"
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                            required 
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>

                    <div className="services-form-input">
                        <label>Informe seu melhor e-mail</label>
                        <input 
                            type="email"
                            placeholder="Ex: joaosilva@email.com"
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="services-form-input">
                        <label>Informe seu CEP</label>
                        <input 
                            type="text"
                            placeholder="Ex: 00000-000"
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                            required 
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                        />
                    </div>

                    <button className="services-form-button" type="submit">
                        Finalizar
                    </button>
                    
                </form>
            </div>
        </section>
    );
}