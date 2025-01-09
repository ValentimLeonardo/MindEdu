import "./rodape.css";

const Rodape = ()  => {
    return (
       <footer className="bg-dark text-white py-4">
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <h5>Links</h5>
                <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#" className="text-white text-decoration-none">Contato</a></li>
                </ul>
            </div>

            <div className="col-md-4">
                <h5>Contato</h5>
                <p>Email: contato@exemplo.com</p>
            </div>
            <div className="col-md-4">
                <h5>Siga-nos</h5>
                <a href="#" className="text-white me-2 text-decoration-none">
                <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="#" className="text-white me-2 text-decoration-none">
                <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#" className="text-white text-decoration-none">
                <i className="fab fa-instagram"></i> Instagram
                </a>
            </div>
            </div>
            <div className="row mt-4">
            <div className="col text-center">
                <p className="mb-0">© 2025 Meu Site. Todos os direitos reservados.</p>
            </div>
            </div>
        </div>
    </footer>

    );
}

export default Rodape;
