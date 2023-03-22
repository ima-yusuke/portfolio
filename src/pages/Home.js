import Particle from "../components/Particle"
import 'font-awesome/css/font-awesome.min.css';
import { Outlet, Link } from "react-router-dom";


function Home(){

   

    return(
        <>
            <Particle></Particle>
            <section className="bar">
                <Link to="/nav"><i class="fa fa-solid fa-bars"></i></Link>
            </section>
            <div className="homepage">
                <h1 className="name">Yusuke Imai</h1>
                <h3 className="name">Frontend Developer</h3>
            </div>
            <section className="homesection">
                <nav>
                    <ul className="homenav">
                        <li>
                            <a href="https://www.linkedin.com/feed/">
                                <i className="fa fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ima-yusuke">
                                <i className="fa fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-solid fa-envelope"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}
export default Home