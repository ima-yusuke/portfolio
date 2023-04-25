import { Outlet, Link } from "react-router-dom";
import { Rings } from  'react-loader-spinner'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About(){

    
    return(
        <>
            <section className="aboutBar">
                <Link to="/portfolio/nav"><i class="fa fa-solid fa-bars"></i></Link>
            </section>

            <section className="container">
                <section className="about">
                    <section className='aboutTop'>
                        <article>
                            <Rings
                                height="400"
                                width="400"
                                color="rgb(230,230,230)"
                                radius="6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="rings-loading"
                            />
                        </article>
                        <img src={require('../img/pic-01.jpg')}></img>
                    </section>
                    <br></br>
                    <p>Scroll</p>
                   
                    <AnimationOnScroll animateIn="animate__tada">
                    <p>Yusuke Imai</p>
                    </AnimationOnScroll>

                    <AnimationOnScroll  animateIn="animate__fadeInLeftBig">
                      <h2>Frontend Developer</h2>
                    </AnimationOnScroll>            
                    
                    
                </section>

                <section className="aboutProfile">
                    <AnimationOnScroll initiallyVisible={true} animateIn="animate__flip">
                        <h3>Profile</h3>
                    </AnimationOnScroll>
                </section>

                <section className="profileBorder">
                    {/* <AnimationOnScroll animateIn="animate__fadeInLeftBig" className="aboutanime"> */}
                            <article>
                                <div></div>
                                <aside>
                                    <h3> Hello! I'm Web Developer </h3>
                                    <p>
                                    I am Yusuke from Japan. I would like to help you from Service and Concept Design to UX/UI with user perspectives. I realized that the world is is full of wonderful people, but it's too difficult to always believe it. I would love to make it easy by expressing your wonderful vision, and the world might be more colorful and powerful.
                                    </p>
                                </aside>
                            </article>   
                                    
                   

                    <article>
                        <div></div>
                        <aside>
                            <h3>Social Media</h3>
                            <aside>
                                <a href="https://www.linkedin.com/feed/">
                                    <i className="fa fa-brands fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/ima-yusuke">
                                    <i className="fa fa-brands fa-github"></i>
                                </a>
                                <a>
                                    <i className="fa fa-solid fa-envelope"></i>
                                 </a>
                            </aside>
                        </aside>    
                    </article> 

                    <article>
                        <div></div>
                        <aside>
                            <h3>Education</h3>
                            <article>
                                <aside>
                                    <h4>[Kansai Gaikokugo University]</h4>
                                    <p>BACHELOR OF ARTS (B.A.) IN ENGLISH</p>
                                    <p>April 2015 - March 2019</p>
                                </aside>
                                <aside>
                                    <h4>[Queen's University]</h4>
                                    <p>Language</p>
                                    <p>May 2016 - August 2016</p>
                                </aside>
                                <aside>
                                    <h4>[Tamwood Language School]</h4>
                                    <p>Language</p>
                                    <p>July 2022 - August 2022</p>
                                </aside>
                                <aside>
                                    <h4>[Tamwood Career]</h4>
                                    <p>Web development </p>
                                    <p>August 2022 - January 2023</p>
                                </aside>
                            </article>
                        </aside>
                    </article>

                    <article>
                        <div></div>
                        <aside>
                            <h3>Development Skills</h3>
                            <article>
                                <aside>
                                    <h4>[Languages]</h4>
                                    <p>
                                        HTML / CSS / SaaS / JavaScript  / jQuery / PHP / Node.js
                                    </p>
                                </aside>
                                <aside>
                                    <h4>[CMS]</h4>
                                    <p>
                                    WordPress
                                    </p>
                                </aside>
                                <aside>
                                    <h4>[Framework]</h4>
                                    <p>Bootstrap / React / AngularJS / Vue.js</p>
                                </aside>
                            </article>
                        </aside>
                    </article>

                    <article>
                        <div></div>
                        <aside>
                            <h3>Hobby</h3>
                            <ul>
                                <li>
                                    - Traveling abroad (I have three years of work experience in travel agency)
                                </li>
                                <li>
                                    - Movie and TV series (Netflix)
                                </li>
                                <li>
                                    - Music (One Direction, Bruno Mars, Taylor swift, etc)
                                </li>
                                <li>
                                    - Drinking with my friends
                                </li>
                            </ul>
                        </aside>
                    </article>
                </section>
            </section>
           
           <section className="aboutFooter">
                <p>
                    @ 2023 Yusuke Imai
                </p>
           </section>
        </>
    )
}
export default About