"use client"

import Footer from "@/app/components/Footer";
import HeroServicos from "@/app/components/HeroServicos";
import NavBar from "@/app/components/NavBar";
import ServicoExplicado from "@/app/components/ServicoExplicado";
import Servicos from "@/app/components/Servicos";

export default function Eletrica() {
    return (
        <section style={{ backgroundColor: "#000000" }}>
            <NavBar />

            <HeroServicos
                title={"Procurando serviços para elétrica?"}
                descricao={"Diversos profissionais para serviços de elétrica, com orçamentos em até 24 horas e preço justo."}
            />

            <Servicos
                href1={"/dashboard/eletrica/residencial"}
                href2={"/dashboard/eletrica/tomadas"}
                servico1={"Eletricista Residencial"}
                servico2={"Troca de Tomadas"}
            />

            <ServicoExplicado
                title={"O que é o serviço de elétrica?"}
                text={`O serviço de elétrica é um conjunto de serviços especializados que envolvem a instalação, manutenção e reparo de sistemas elétricos residenciais, garantindo o funcionamento seguro e eficiente das instalações elétricas.

                    Esse tipo de serviço é fundamental para assegurar a segurança dos moradores, prevenir falhas elétricas e manter o bom funcionamento dos equipamentos e dispositivos conectados à rede elétrica. Entre os serviços oferecidos estão eletricista residencial, troca de tomadas, entre outros.

                    É importante buscar por profissionais qualificados e experientes para realizar os serviços de elétrica, garantindo assim a qualidade e eficiência dos trabalhos, além de proporcionar mais segurança, confiabilidade e tranquilidade no uso das instalações elétricas.
                `}
            />

            <Footer/>
        </section>
    );
}