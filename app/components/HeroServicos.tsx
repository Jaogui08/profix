"use client"

import "./components.css";

type HeroServicosProps = {
    title: string,
    descricao: string,
}

export default function HeroServicos({title, descricao}: HeroServicosProps){
    return(
        <section className="hero-servicos">
            <div className="hero-servicos-text">
                <h1>{title}</h1>
                <h2>{descricao}</h2>
                <div className="hero-servicos-icon">
                    <img style={{width: 30}} src="/secure-icon.png"/>
                    <p>Orçamentos gratuitos e seguros</p>
                </div>
            </div>
            <img style={{width: 400}} src="/mascote02.png"/>
        </section>
    );
}