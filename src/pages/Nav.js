import ParticleNav from "../components/ParticleNav"
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function Nav({setPage,page}){

    const navigate = useNavigate()
    const backHome=()=>{
        if(page=="home"){
            navigate("/")
        }else if(page=="about"){
            navigate("/about")
        }else if(page=="work"){
            navigate("/work")
        }
    }

    const navOtherPage=(page)=>{
        console.log(page.target.innerText)
        if(page.target.innerText=="Home"){
            setPage("home")
        }else if(page.target.innerText=="About"){
            setPage("about")
        }else if(page.target.innerText=="Work"){
            setPage("work")
        }
    }

    return(
        <>
            <ParticleNav></ParticleNav>
            <section className="navpage">
                <nav className="navmenu">
                    <ul>
                        <li><Link to="/portfolio/load" onClick={navOtherPage}>Home</Link></li>
                        <li><Link to="/portfolio/load" onClick={navOtherPage}>About</Link></li>
                        <li><Link to="/portfolio/load" onClick={navOtherPage}>Work</Link></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>
                <button onClick={backHome}>X</button>
            </section>
           
        </>
    )
}
export default Nav