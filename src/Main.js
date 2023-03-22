import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/About';
import Work from './pages/Work';
import Load from './pages/Loading';
import Nav from "./pages/Nav"
import NavMenu from './pages/NavMenu';
import { useState } from 'react';
function Main(){

    const [page,setPage] = useState("home");
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/portfolio/' element={<NavMenu/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/portfolio/about' element={<About />}/>
                    <Route path='/portfolio/work' element={<Work />}/>
                    <Route path='/portfolio/nav' element={<Nav setPage={setPage} page={page}/>}/> 
                    <Route path='/portfolio/load' element={<Load page={page}/>}/> 
                </Route>
            </Routes>
        </BrowserRouter>
        // <Home></Home>
    )
}
export default Main