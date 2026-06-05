"use client"

import "./dashboard.css"
import NavBar from "../components/NavBar";
import Link from "next/link";
import Orders from "../components/Orders";
import Footer from "../components/Footer";

export default function Dashboard(){
    return(
        <section style={{backgroundColor: "#000000"}}>
            <NavBar/>

            <div className="hero">
                <div className="hero-text">
                    <h1 style={{fontSize: "3.3rem", lineHeight: 1.2, fontWeight: 700}}>Muitos serviços em apenas um<br></br>único lugar</h1>
                    <p style={{fontSize: "1.5rem"}}>Encontre profissionais e contrate serviços para seus problemas</p>
                </div>
                <img className="hero-img" src="/mascote01.png"/>
            </div>

            <div className="services">
                <Link href={"/dashboard/informatica"} className="services-card">
                    <img src="/informatica.png"/>
                    <h1>Informática</h1>
                </Link>
                <Link href={"/dashboard/redes"} className="services-card">
                    <img src="/redes.png"/>
                    <h1>Redes</h1>
                </Link>
                <Link href={"/dashboard/eletrica"} className="services-card">
                    <img src="/eletrica.png"/>
                    <h1>Elétrica</h1>
                </Link>
                <Link href={"/dashboard/hardware"} className="services-card">
                    <img src="/hardware.png"/>
                    <h1>Hardware</h1>
                </Link>
            </div>

            <div className="reviews">
                <h1 className="reviews-title">Quem contratou um profix recomenda<br></br><span>São milhões de clientes e profissionais satisfeitos</span></h1>
                <div className="reviews-cont">
                    <div className="reviews-card">
                        <img style={{width: 60}} src="/aspas.png"/>
                        <p>
                            Fui muito bem atendida, o profissional foi muito educado e fez um trabalho de qualidade. Valeu a pena, orçamento grátis e não foi caro.<br></br><br></br>
                            Serviço de Manutenção de Computador, Ana Paula contratou um profissional em São Paulo, SP
                        </p>
                    </div>
                    <div className="reviews-card">
                        <img style={{width: 60}} src="/aspas.png"/>
                        <p>
                            Os profissionais são pessoas dedicadas com seus serviços. Tudo o que é pedido é feito da maneira como foi pedido. Aprovado!<br></br><br></br>
                            Serviço de Instalação de Roteador, Bruno contratou um profissional em Campinas, SP
                        </p>
                    </div>
                    <div className="reviews-card">
                        <img style={{width: 60}} src="/aspas.png"/>
                        <p>
                            Um excelente profissional, pontual e acima de tudo confiável. Foi bastante educado e atencioso com o trabalho, recomendo.<br></br><br></br>
                            Serviço de Montagem de PC, Renata contratou um profissional em Curitiba, PR
                        </p>
                    </div>
                </div>
            </div>

            <div className="orders">
                <h1 className="orders-title">Pedidos mais frequentes<br></br><span>Mais de 1 mil pedidos realizados por dia</span></h1>
                <div className="orders-cont">
                    <Orders area={"Informática"} pedido={"Manutenção de Computador"} nota={"4.9"} data={"01 de maio de 2021"}/>

                    <Orders area={"Redes"} pedido={"Configuração de Wi/FI"} nota={"4.2"} data={"03 de abril de 2021"}/>

                    <Orders area={"Elétrica"} pedido={"Troca de Tomadas"} nota={"4.5"} data={"05 de junho de 2021"}/>
                </div>
            </div>

            <Footer/>
        </section>
    );
}