import { BrowserRouter, Routes, Route} from "react-router-dom";
import Details from "../../pages/Details";
import Home from "../../pages/Home";
import Error from "../../pages/Error/Error";



function Router () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/details/:id' element={<Details />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    )
}

export default Router;