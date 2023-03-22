import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NavMenu(){
    
    return(
        <>
            <nav style={{display:'none'}}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>  
                    <li>
                        <Link to="/nav">Nav</Link>
                    </li>   
                    <li>
                        <Link to="/load">Nav</Link>
                    </li>
                    <li>
                        <Link to="/about">Nav</Link>
                    </li>    
                    <li>
                        <Link to="/work">Nav</Link>
                    </li>      
                </ul>
            </nav> 

            <Outlet/>
        </>
    )
};
export default NavMenu;