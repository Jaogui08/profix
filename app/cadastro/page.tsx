"use client";

import "../form-style.css";
import NavBarLogin from "../components/NavBarLogin";
import Link from "next/link";
import ComoFunciona from "../components/ComoFunciona";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const router = useRouter();

    function cadastrarUsuario(e: React.FormEvent) {
        e.preventDefault();

        const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

        const emailExist = usuarios.some(
            (usuario: any) => usuario.email === email
        );

        if (emailExist) {
            Swal.fire({
                title: "Erro!",
                text: "Este e-mail já está cadastrado!",
                icon: "error",
                confirmButtonColor: "#098a8a"
            });
            return;
        }

        const novoUsuario = {
            id: Date.now(),
            nome,
            email,
            senha,
            tipo: "usuario"
        };

        usuarios.push(novoUsuario);

        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );

        Swal.fire({
            title: "Sucesso!",
            text: "Cadastro realizado com sucesso!",
            icon: "success",
            confirmButtonColor: "#098a8a"
        }).then(() => {
            router.push("/");    
        });
    }

  return (
    <section style={{backgroundColor: "#000000"}}>
      <NavBarLogin/>

      <div className="formContainer">
        <form onSubmit={cadastrarUsuario}>
          <div className="form-title">
            <h1>Crie sua conta</h1>
            <p>Crie sua conta e encontre os melhores profissionais para sua necessidade</p>
          </div>

          <div className="input-group">
            <label>Nome</label>
            <input 
                type="text"
                placeholder="Ex: Usuário Mock"
                required
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                value={nome}
                onChange={(e) => setNome(e.target.value)}    
            />
          </div>

          <div className="input-group">
            <label>E-mail</label>
            <input 
                type="email" 
                placeholder="Ex: usuario@email.com"
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
                placeholder="Crie uma senha forte" 
                required 
                autoComplete="off" 
                autoCapitalize="off" 
                autoCorrect="off"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button className="form-button" type="submit">
            Cadastrar-se
          </button>

          <div className="form-link">
            <h1>Já possui uma conta? </h1>
            <Link style={{fontWeight: 700}} href={"/"}> Faça login aqui</Link>
            <h1>Ou</h1>
            <Link style={{fontWeight: 700}} href={"/cadastro-profissional"}> Seja um profissional</Link>
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
