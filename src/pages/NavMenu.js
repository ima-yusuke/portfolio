import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NavMenu(){
    
    return(
        <>
            <nav style={{display:'none'}}>
                <ul>
                    <li>
                        <Link to="/portfolio/">Home</Link>
                    </li>  
                    <li>
                        <Link to="/portfolio/nav">Nav</Link>
                    </li>   
                    <li>
                        <Link to="/portfolio/load">Nav</Link>
                    </li>
                    <li>
                        <Link to="/portfolio/about">Nav</Link>
                    </li>    
                    <li>
                        <Link to="/portfolio/work">Nav</Link>
                    </li>      
                </ul>
            </nav> 

            <Outlet/>
        </>
    )
};
export default NavMenu;