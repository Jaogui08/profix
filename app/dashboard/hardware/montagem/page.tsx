"use client"

import Footer from "@/app/components/Footer";
import FormServicos from "@/app/components/FormServicos";
import NavBar from "@/app/components/NavBar";
import ServicoExplicado from "@/app/components/ServicoExplicado";

export default function MontagemPC(){
    return(
        <section style={{backgroundColor: "#000000"}}>
            <NavBar/>

            <FormServicos servico={"Montagem de PC"} areaServico={"Hardware"}/>

            <ServicoExplicado
                title={"O que é o serviço de hardware?"}
                text={`O serviço de hardware é um conjunto de serviços especializados que envolvem a montagem, manutenção, reparo e atualização de componentes físicos de computadores e outros equipamentos tecnológicos.
            
                    Esse tipo de serviço é fundamental para garantir o bom funcionamento, desempenho e durabilidade dos equipamentos, além de prevenir falhas e reduzir custos com problemas mais complexos no futuro. Entre os serviços oferecidos estão montagem de computadores, manutenção de hardware, troca de peças e componentes, entre outros.
            
                    É importante buscar por profissionais qualificados e experientes para realizar os serviços de hardware, garantindo assim a qualidade e eficiência dos trabalhos, além de proporcionar mais segurança, estabilidade e desempenho aos equipamentos.
                `}
            />

            <Footer/>
        </section>
    );
}