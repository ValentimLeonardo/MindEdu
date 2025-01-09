import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () =>{
    return(
        
        <div className="container d-flex flex-column text-center align-items-center mt-4 position-absolute top-50 start-50 translate-middle bg-dark text-white p-3">
            <style>
                @import url(&apos;https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap&apos;);
            </style>
            <form>
                <h1 className="mb-4">MindEDU</h1>
                <div className="mb-3">
                    <input type="email" placeholder="E-mail" />
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Senha" />
                </div>
            </form>
            <button className="custom-btn mb-3">Acessar</button>   
            <a href="." className="mb-3">Não possuo Cadastro</a>    
        </div>
    )
}

export default Login;