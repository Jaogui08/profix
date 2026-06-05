import "./Orders.css"

type OrdersProps = {
    area: string,
    pedido: string,
    nota: string,
    data: string,

}

export default function Orders({area, pedido, nota, data}: OrdersProps){
    return(
        <section>
            <div className="orders-card">
                <div className="orders-card-title">
                    <img style={{width: 60}} src="/orders-icon.png"/>
                    <h1 style={{color: "#3323AC", fontSize: "1.4rem", fontWeight: 600}}>{area}</h1>
                </div>

                <div className="orders-card-text">
                    <h1 style={{fontWeight: 700, fontSize: "1.2rem"}}>{pedido}</h1>
                    <h1 style={{fontSize: "1.1rem"}}>Avaliação do cliente</h1>
                </div>

                <div className="orders-card-rate">
                    <h1 style={{fontSize: "1.1rem", fontWeight: 400}}>{nota}</h1>
                    <img style={{width: 50}} src="/orders-star.png"/>
                </div>

                <p>{data}</p>
            </div>
        </section>
    );
}