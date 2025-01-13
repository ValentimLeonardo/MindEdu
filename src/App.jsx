import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/login";
import HomePage from "./pages/Homepage/homePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro/cadastro";
import Perfil from "./pages/Perfil/perfil";
import Cronograma from './pages/Cronograma/Cronograma';


function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="/homePage" element={<HomePage/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/cronograma' element={<Cronograma/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;