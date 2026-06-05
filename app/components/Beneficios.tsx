import "./loginComponents.css";

type PropsBeneficios = {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

export default function Beneficios({text1, text2, text3, text4}: PropsBeneficios) {
    return (
        <section className="beneficios-cont">
            <div className="beneficios">
                <h1 style={{fontSize: "2.7rem", fontWeight: 700}}>Benefícios de nossos serviços</h1>
                <div className="beneficios-card-cont">
                    <div className="beneficios-card">
                        <img style={{width: 140}} src="/beneficios-img.png"/>
                        <h1>{text1}</h1>
                    </div>
                    <div className="beneficios-card">
                        <img style={{width: 140}} src="/beneficios-img.png"/>
                        <h1>{text2}</h1>
                    </div>
                    <div className="beneficios-card">
                        <img style={{width: 140}} src="/beneficios-img.png"/>
                        <h1>{text3}</h1>
                    </div>
                    <div className="beneficios-card">
                        <img style={{width: 140}} src="/beneficios-img.png"/>
                        <h1>{text4}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}