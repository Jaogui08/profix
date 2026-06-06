"use client"

import Footer from "@/app/components/Footer";
import FormServicos from "@/app/components/FormServicos";
import NavBar from "@/app/components/NavBar";
import ServicoExplicado from "@/app/components/ServicoExplicado";

export default function Roteador(){
    return(
        <section style={{backgroundColor: "#000000"}}>
            <NavBar/>

            <FormServicos servico={"Instalação de Roteador"} areaServico={"Redes"}/>

            <ServicoExplicado
                title={"O que é o serviço de redes?"}
                text={`O serviço de redes é um conjunto de serviços especializados que envolvem a instalação, configuração e manutenção de redes domésticas e empresariais, garantindo uma conexão estável, segura e eficiente para dispositivos conectados à internet.
            
                    Esse tipo de serviço é fundamental para assegurar o bom funcionamento da comunicação entre equipamentos, melhorar a qualidade da conexão e evitar problemas de instabilidade ou falhas de acesso à rede. Entre os serviços oferecidos estão configuração de Wi-Fi, instalação e configuração de roteadores, entre outros.
            
                    É importante buscar por profissionais qualificados e experientes para realizar os serviços de redes, garantindo assim a qualidade e eficiência dos trabalhos, além de proporcionar mais segurança, desempenho e confiabilidade para a utilização da internet no dia a dia.
                `}
            />

            <Footer/>
        </section>
    );
}