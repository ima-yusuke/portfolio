import { Outlet, Link } from "react-router-dom";

function Contact(){
    return(
        <>
            <section className="bar">
                <Link to="/portfolio/nav"><i class="fa fa-solid fa-bars"></i></Link>
            </section>
            <h1>Contact Page</h1>
            <a href="mailto:yu_suke1125aadxyz@icloud.com">Send Email</a>
        </>
    )
}
export default Contact