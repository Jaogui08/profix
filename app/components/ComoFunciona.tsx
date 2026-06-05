import "./loginComponents.css";

export default function ComoFunciona() {
    return (
        <section className="como-funciona-cont">
            <div className="como-funciona">
                <h1 style={{fontSize: "2.7rem", fontWeight: 700}}>Como funciona?</h1>
                <p style={{fontSize: "1.2rem", fontWeight: 500, marginBottom: 30}}>Nossa plataforma conecta clientes e profissionais de maneira simples e prática. Após realizar o cadastro, 
                    o usuário pode escolher a categoria desejada, selecionar um serviço e preencher algumas informações sobre 
                    o que precisa.<br></br><br></br>Depois do envio da solicitação, profissionais cadastrados poderão visualizar o 
                    pedido e enviar orçamentos para realizar o serviço. Tudo isso de forma rápida, organizada e acessível
                    em um único lugar.</p>
            </div>
        </section>
    );
}