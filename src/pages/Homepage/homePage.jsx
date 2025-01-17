import "./homePage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegar from "../../Components/Nav/nav";
import PdfViewer from "../../Components/Texto/texto";
import Rodape from "../../Components/Rodape/rodape";
import AudioButton from "../../Components/Audio/Audio";

const HomePage = () => {
    return (
      <main>
        <header>
          <div className="container d-flex flex-column text-center align-items-center py-4">
            <h1>MindEdu</h1>
          </div>    
        </header>
        <Navegar />
        <div className="container d-flex flex-column text-center align-items-center mb-4">
          <h2>Instruções de uso</h2>
          <div className="container px-4 text-center">
            <div className="row gx-5">
              <div className="col-md-6 mb-3">
                <div className="p-3">
                  <AudioButton />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="p-3">
                  <PdfViewer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center my-5">
          <h2>Meus Cronogramas</h2>
          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="p-3 bg-white border rounded shadow">
                Cronograma 1
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-3 bg-white border rounded shadow">
                Cronograma 2
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-3 bg-white border rounded shadow">
                Cronograma 3    
              </div>
            </div>
          </div>
        </div>
        <Rodape />
      </main>
    );
}
  

export default HomePage;
