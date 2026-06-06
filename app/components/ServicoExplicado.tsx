"use client"

import "./components.css";

type ExplicacaoProps = {
    title: string,
    text: string,
}

export default function ServicoExplicado({title, text}: ExplicacaoProps) {
    return (
        <section className="explicacao-cont">
            <div className="explicacao">
                <h1 style={{fontSize: "2.7rem", fontWeight: 700}}>{title}</h1>
                <p style={{fontSize: "1.2rem", fontWeight: 500, marginBottom: 30, whiteSpace: "pre-line"}}>{text}</p>
            </div>
        </section>
    );
}