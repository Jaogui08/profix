"use client"

import Footer from "@/app/components/Footer";
import HeroServicos from "@/app/components/HeroServicos";
import NavBar from "@/app/components/NavBar";
import ServicoExplicado from "@/app/components/ServicoExplicado";
import Servicos from "@/app/components/Servicos";

export default function Informatica() {
    return (
        <section style={{ backgroundColor: "#000000" }}>
            <NavBar />

            <HeroServicos
                title={"Procurando serviços para informática?"}
                descricao={"Diversos profissionais para serviços em informática, com orçamentos em até 24 horas e preço justo."}
            />

            <Servicos
                href1={"/dashboard/informatica/manutencao"}
                href2={"/dashboard/informatica/suporte"}
                servico1={"Manutenção de Computador"}
                servico2={"Suporte Técnico"}
            />

            <ServicoExplicado
                title={"O que é o serviço de informática?"}
                text={`O serviço de informática é um conjunto de serviços especializados que envolvem a manutenção, reparo, instalação e diagnóstico de problemas em computadores, notebooks e outros equipamentos tecnológicos. 
                    
                    Esse tipo de serviço é fundamental para garantir o bom funcionamento, desempenho e durabilidade dos dispositivos, além de prevenir falhas, perda de dados e reduzir custos com problemas mais complexos no futuro. 
                    
                    Entre os serviços oferecidos estão manutenção de computador, suporte técnico, entre outros. É importante buscar por profissionais qualificados e experientes para realizar os serviços de informática, garantindo assim a qualidade e eficiência dos trabalhos, além de proporcionar mais segurança e estabilidade no uso dos equipamentos.
                `}
            />

            <Footer/>
        </section>
    );
}