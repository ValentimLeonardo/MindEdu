import Navegar from "../Nav/nav"
import Rodape from "../Rodape/rodape"
import "./novo.css"

const Novo = () => {
    return(
        <main>
            <Navegar/>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-lg-7 col-md-6 col-sm-12 bg-light d-flex justify-content-center align-items-center">
                    <div>
                        <h1>Novo Crongrama</h1>
                        {/* Adicione o conteúdo principal aqui */}
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 bg-secondary d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-primary mb-3" onClick={() => alert('Adicionar Tarefa')}>
                        Adicionar Tarefa
                    </button>
                    <button className="btn btn-danger mb-3" onClick={() => alert('Remover Tarefa')}>
                        Remover Tarefa
                    </button>
                    <button className="btn btn-warning" onClick={() => alert('Apagar Cronograma')}>
                        Apagar Cronograma
                    </button>
                    </div>
                </div>
            </div>
            <Rodape/>
        </main>
    )
}

export default Novo