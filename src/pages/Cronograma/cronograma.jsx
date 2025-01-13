import Navegar from "../../Components/Nav/nav";
import Rodape from "../../Components/Rodape/rodape";
import "./cronograma.css";
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';


const Cronograma = () =>{
    return (
        <main className="full-height d-flex flex-column ">
            <div className="navegar bg-light">
                <Navegar />
            </div>
            <div className="container container-content mt-3">
                <h1 className="text-center mb-4">Meus Cronogramas</h1>
                <div className="row h-80 w-60">
                    {/* Div maior à esquerda ocupando 50% da tela */}
                    <div className="col-6">
                        <div className="p-4 bg-white border rounded text-center h-100">
                            <Button variant="success" className="w-100 h-100">
                                <FaPlus /> Adicionar
                            </Button>
                        </div>
                    </div>
                    {/* Duas divs menores alinhadas horizontalmente com space-between */}
                    <div className="col-6 d-flex justify-content-between">
                        <div className="p-4 bg-white border rounded text-center" style={{ width: '48%' }}>
                            <Button variant="primary" className="w-100">
                                Cronograma 1
                            </Button>
                        </div>
                        <div className="p-4 bg-white border rounded text-center" style={{ width: '48%' }}>
                            <Button variant="primary" className="w-100">
                                Cronograma 2
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rodape bg-light mt-auto">
                <Rodape />
            </div>
        </main>
    );
}

export default Cronograma;