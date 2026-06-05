"use client"

import "./navbar.css"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBarProfissional() {
    
    const router = useRouter();

    function logout() {
        localStorage.removeItem("usuarioLogado");

        router.push("/");
    }
    
    return(
        <nav style={{backgroundColor: "#11a3a3", width: "100%", paddingInline: 50, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <img style={{width: 90}} src="../logo-profix.png"/>

            <div style={{color: "#ffffff", fontSize: "1.1rem", fontWeight: 500, display: "flex", gap: 50}}>
                <Link className="nav-link" href={"/dashboard-profissional/pedidos"}>Pedidos em Aberto</Link>
                <button className="nav-link" onClick={logout}>
                    Sair
                </button>
            </div>
        </nav>
    );
}