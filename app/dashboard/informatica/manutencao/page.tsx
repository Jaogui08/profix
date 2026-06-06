"use client"

import Footer from "@/app/components/Footer";
import FormServicos from "@/app/components/FormServicos";
import NavBar from "@/app/components/NavBar";
import ServicoExplicado from "@/app/components/ServicoExplicado";

export default function ManutencaoPC(){
    return(
        <section style={{backgroundColor: "#000000"}}>
            <NavBar/>

            <FormServicos servico={"Manutenção de Computador"} areaServico={"Informática"}/>

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