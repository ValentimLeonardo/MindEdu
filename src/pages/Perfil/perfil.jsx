import ProfileIcon from "../../Components/icone/icone";
import Navegar from "../../Components/Nav/nav";
import "./perfil.css";


const Perfil = () => {
    return (
        <main>
          <Navegar />
          <div className="container mt-5">
            <div className="row">
              {/* Coluna para o ProfileIcon */}
              <div className="col-md-4 d-flex flex-column justify-content-center align-items-center me-5">
                <ProfileIcon />
                <label htmlFor="file-upload" className="custom-file-upload mt-3">
                  Escolher Arquivo
                </label>
                <input id="file-upload" type="file" />
              </div>
    
              {/* Coluna para as informações do usuário */}
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <h3>Nome</h3>
                    <a href="#">Seu Nome</a>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3>E-mail</h3>
                    <a href="mailto:seuemail@example.com">seuemail@example.com</a>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3>Data Nascimento</h3>
                    <a href="#">01/01/2000</a>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3>Série/Ano</h3>
                    <a href="#">3º Ano</a>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3>Telefone</h3>
                    <a href="#">(11) 12345-6789</a>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3>Endereço</h3>
                    <a href="#">Rua Exemplo, 123</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
};


export default Perfil;