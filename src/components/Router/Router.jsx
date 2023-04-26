import { BrowserRouter, Routes, Route} from "react-router-dom";
import Details from "../../pages/Details";
import Home from "../../pages/Home";



function Router () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/details/:id' element={<Details />}/>
            <Route path='*' element={<div>Pagina não econtrada</div>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default Router;