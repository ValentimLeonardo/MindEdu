import "./login.css";
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () =>{
    return(
        <div className="container text-center mt-4">
            <form>
                <h1 className="mb-4">MindEDU</h1>
                <div className="mb-3">
                    <input type="email" placeholder="E-mail" />
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Senha" />
                </div>
                <button>Acessar</button>    
            </form>
            <img src="/src/assets/Questions-pana.svg" alt="uma pessoa com interrogação onde pode tirar dúvidas" />
        </div>
    )
}

export default Login;