import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Manu";
import Rodape from "./componentes/Rodape";
import PadraoDaPagina from "./componentes/PadraoDaPagina/padraoDaPagina";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada";
import Cards from "./paginas/Cards";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>

        <Route path="/" element={<PadraoDaPagina />}>
        <Route index element={<Inicio />} />
        <Route path="sobremim" element={<SobreMim/>}/>
        <Route path="cards/:id" element={<Cards />} />
         
        </Route>
        
        <Route path="*"element={<PaginaNaoEncontrada />} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes
