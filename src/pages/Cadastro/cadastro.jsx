import "./cadastro.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Cadastro = () =>{
    return(
        <div className="container d-flex flex-column text-center align-items-center mt-5 position-absolute top-50 start-50 translate-middle bg-dark text-white p-3">
            <h1>Cadastro</h1>
               <form action="." method="post">
                    <div className="row mb-3">
                        <div className=" col-12 col-md-6">
                            <label htmlFor="nome">Nome Completo</label>
                            <input type="text" id="nome" name="nome" className="form-control form-control-lg"/>
                        </div>
                        
                        <div className="col-12 col-md-6">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" className="form-control form-control-lg"/>
                        </div>
                    </div>
                    
                    <div className="row mb-3">
                        <div className=" col-12 col-md-6">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" name="senha" className="form-control form-control-lg"/>
                        </div>
                        
                        <div className="col-12 col-md-6">
                            <label htmlFor="nascimento">Data de nascimento:</label>
                            <input type="date" id="nascimento" name="nascimento" className="form-control form-control-lg"/>
                        </div>
                    </div>

                    <label htmlFor="ano">Série/Ano</label>
                    <select id="ano" name="ano">
                        <option value="1">1º ano</option>
                        <option value="2">2º ano</option>
                        <option value="3">3º ano</option> 
                    </select>
               </form>
            <button className="custom-btn mb-3"><Link to={"/"}>Salvar</Link></button>   
        </div>
    )
}

export default Cadastro;