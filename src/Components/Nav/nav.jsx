import "./nav.css"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navegar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Perfil</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Cadastro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Meus Cronogramas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Revisão</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navegar;