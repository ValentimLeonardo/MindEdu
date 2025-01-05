import React from "react";
import "./homePage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegar from "../../Components/Nav/nav";
import AudioPlayer from "../../Components/Audio/Audio";
import PdfViewer from "../../Components/Texto/texto";
import Rodape from "../../Components/Rodape/rodape";

const HomePage = () =>{
    return(
        <main>
            <header>
                <div className="container d-flex flex-column text-center align-items-center">
                    <h1>MindEdu</h1>
                </div>    
            </header>
            <Navegar/>
            <div className="container d-flex flex-column text center align-items-center mb-2">
                <h2>Instruções de uso</h2>
                <div className="container px-4 text-center">
                    <div className="row gx-5">
                        <div className="col">
                        <div className="p-3">
                            <AudioPlayer/>
                        </div>
                        </div>
                        <div className="col">
                        <div className="p-3">
                            <PdfViewer/>
                        </div>
                        </div>
                    </div>
                </div>
                

            </div>
            <div className="container text-center my-5">
                <h2>Meu Título Centralizado</h2>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="p-3 bg-white border rounded shadow">
                            Conteúdo da Div 1
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 bg-white border rounded shadow">
                            Conteúdo da Div 2
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 bg-white border rounded shadow">
                            Conteúdo da Div 3
                        </div>
                    </div>
                </div>
            </div>
            <Rodape/>  
        </main>
    )
}

export default HomePage;