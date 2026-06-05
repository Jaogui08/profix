import "./loginComponents.css";

export default function Footer() {
    return(
        <footer>
            <img style={{width: 160}} src="/logo-profix.png"/>
            <div className="footer-infos">
                <div className="footer-cont">
                    <div className="footer-contact-card">
                        <img style={{width: 25}} src="/email.png"/>
                        <h1>profixsupport@email.com</h1>
                    </div>
                    <div className="footer-contact-card">
                        <img style={{width: 25}} src="/phone.png"/>
                        <h1>(12) 34567-8910</h1>
                    </div>
                </div>
                <h1>©2026, Profix LTDA. - Itapetininga/SP - Brasil</h1>
            </div>
        </footer>
    );
}