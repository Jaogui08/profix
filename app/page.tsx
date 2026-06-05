"use client";

import "./form-style.css";
import NavBarLogin from "./components/NavBarLogin";
import Link from "next/link";
import ComoFunciona from "./components/ComoFunciona";
import Beneficios from "./components/Beneficios";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const router = useRouter();

  function login(e: React.FormEvent) {
    e.preventDefault();

    const usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]"
    );

    const usuarioExist = usuarios.find(
        (usuario: any) =>
          usuario.email === email &&
          usuario.senha === senha
    );

    if (!usuarioExist) {
        Swal.fire({
            title: "Erro!",
            text: "E-mail ou senha inválidos.",
            icon: "error",
            confirmButtonColor: "#098a8a"
        });
        return;
    }

    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuarioExist)
    );

    if (usuarioExist.tipo === "usuario") {
        router.push("/dashboard");
    } else if (usuarioExist.tipo === "profissional") {
        router.push("/dashboard-profissional");
    }

}

  return (
    <section style={{backgroundColor: "#000000"}}>
      <NavBarLogin/>

      <div className="formContainer">
        <form onSubmit={login}>
          <div className="form-title">
            <h1>Bem vindo de volta!</h1>
            <p>Entre com sua conta Profix e acesse a plataforma</p>
          </div>

          <div className="input-group">
            <label>E-mail</label>
            <input 
              type="email" 
              placeholder="Insira seu e-mail" 
              required 
              autoComplete="off" 
              autoCapitalize="off" 
              autoCorrect="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input 
              type="password" 
              placeholder="Insira sua senha" 
              required 
              autoComplete="off" 
              autoCapitalize="off" 
              autoCorrect="off"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button className="form-button" type="submit">
            Fazer login
          </button>

          <div className="form-link">
            <h1>Não possui uma conta? </h1>
            <Link style={{fontWeight: 700}} href={"/cadastro"}> Crie uma aqui</Link>
          </div>
        </form>

        <img className="form-img" src="../services.png"/>
      </div>

      <ComoFunciona/>

      <Beneficios text1={"Mais praticidade"} text2={"Maior segurança"} text3={"Altas avaliações"} text4={"Profissionais qualificados"}/>

      <Footer/>
    </section>    
  );
}
