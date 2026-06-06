"use client"

import Link from "next/link";
import "./components.css"

type ServicosProps = {
    href1: string,
    href2: string,
    servico1: string,
    servico2: string,
}

export default function Servicos({href1, href2, servico1, servico2}: ServicosProps){
    return(
        <section style={{display: "flex", justifyContent: "center"}}>
            <div className="services-cont">
                <div className="services-cont-2">
                    <h1>Qual serviço está precisando?</h1>

                    <Link href={href1}>{servico1}</Link>

                    <Link href={href2}>{servico2}</Link>

                    <p>Orçamentos em até 24 horas!</p>
                </div>
            </div>
        </section>
    );
}