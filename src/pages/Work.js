import { Outlet, Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { EffectCoverflow } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import { FreeMode,Thumbs } from "swiper";

function Work(){
    const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = (e) =>{
    slideIdx = 0
    setShow(true);
    let idx = e.target.id
    dataArray.forEach((val,key)=>{
        if(key==idx){
            console.log(val)
            setMsg(val)
        }
    })
  } 

  const [msg,setMsg] = useState(null)
    
  let dataArray = [
      {"id":1,"src":'pic-02.png',"title":"test1","gallry":["pic-02.png","pic-03.png","pic-04.png"],"text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni repudiandae optio nulla sequi aliquam velit expedita dolorem debitis cum laborum perspiciatis sint quis quaerat ullam iusto id officia nisi, veniam at. Ipsam provident omnis illum doloribus! Voluptatem libero harum doloremque, in repellat ipsa voluptas culpa placeat necessitatibus error reprehenderit expedita nihil reiciendis ullam deleniti distinctio magnam natus velit odit inventore?"},
      {"id":2,"src":'pic-03.png',"title":"test2","gallry":["pic-03.png","pic-03.png","pic-03.png"],
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni repudiandae optio nulla sequi aliquam velit expedita dolorem debitis cum laborum perspiciatis sint quis quaerat ullam iusto id officia nisi, veniam at. Ipsam provident omnis illum doloribus! Voluptatem libero harum doloremque, in repellat ipsa voluptas culpa placeat necessitatibus error reprehenderit expedita nihil reiciendis ullam deleniti distinctio magnam natus velit odit inventore? "},
      {"id":3,"src":'pic-04.png',"title":"test3","gallry":["pic-04.png","pic-04.png","pic-04.png"],
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni repudiandae optio nulla sequi aliquam velit expedita dolorem debitis cum laborum perspiciatis sint quis quaerat ullam iusto id officia nisi, veniam at. Ipsam provident omnis illum doloribus! Voluptatem libero harum doloremque, in repellat ipsa voluptas culpa placeat necessitatibus error reprehenderit expedita nihil reiciendis ullam deleniti distinctio magnam natus velit odit inventore?"},
      {"id":4,"src":'pic-02.png',"title":"test4","gallry":["pic-02.png","pic-02.png","pic-02.png"],
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni repudiandae optio nulla sequi aliquam velit expedita dolorem debitis cum laborum perspiciatis sint quis quaerat ullam iusto id officia nisi, veniam at. Ipsam provident omnis illum doloribus! Voluptatem libero harum doloremque, in repellat ipsa voluptas culpa placeat necessitatibus error reprehenderit expedita nihil reiciendis ullam deleniti distinctio magnam natus velit odit inventore?"},
      {"id":5,"src":'pic-03.png',"title":"test5","gallry":["pic-04.png","pic-03.png","pic-03.png"],
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni repudiandae optio nulla sequi aliquam velit expedita dolorem debitis cum laborum perspiciatis sint quis quaerat ullam iusto id officia nisi, veniam at. Ipsam provident omnis illum doloribus! Voluptatem libero harum doloremque, in repellat ipsa voluptas culpa placeat necessitatibus error reprehenderit expedita nihil reiciendis ullam deleniti distinctio magnam natus velit odit inventore?"},
      {"id":6,"src":'pic-04.png',"title":"test6","gallry":["pic-03.png","pic-02.png","pic-04.png"],
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni repudiandae optio nulla sequi aliquam velit expedita dolorem debitis cum laborum perspiciatis sint quis quaerat ullam iusto id officia nisi, veniam at. Ipsam provident omnis illum doloribus! Voluptatem libero harum doloremque, in repellat ipsa voluptas culpa placeat necessitatibus error reprehenderit expedita nihil reiciendis ullam deleniti distinctio magnam natus velit odit inventore?"},
    ]

    let slideIdx = 0;

    function imgUrl() {
        if(msg!=null){
            switch (slideIdx) {
                case 0:
                    slideIdx++
                    return msg["gallry"][0]
                case 1:
                    slideIdx++
                    return msg["gallry"][1]
                case 2:
                    slideIdx++
                    return msg["gallry"][2]
                default:
                    break
            }
        }else{
            return "pic-01.jpg"
        }
      
    }

    function createSlide() {
        return (
          <SwiperSlide>
            <img className="slideImg" src={require(`../img/${imgUrl()}`)}/>
          </SwiperSlide>
        );
    }

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    
    return(
        <>
            <section className="aboutBar">
                <Link to="/portfolio/nav"><i class="fa fa-solid fa-bars"></i></Link>
            </section>
            <h1 className="workh1">Work page</h1>

            <section className="work">
                {dataArray.map((val,idx)=>{
                    return <figure name={idx}>
                            <img src={require(`../img/${val.src}`)} onClick={handleShow} id={idx}></img>
                            <p className="ptest" key={idx}>{val.title}</p>
                        </figure>
                })
                }
            </section>
           
            <Modal show={show} onHide={handleClose} animation={false} aria-labelledby="contained-modal-title-vcenter"
            centered size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section className="modalbox">
                        <article>
                            <p>{msg!=null?msg.title:null}</p>
                            <p>{msg!=null?msg.text:null}</p>
                            <aside className="modalgit">
                                <a href="https://github.com/ima-yusuke">
                                    <i className="fa fa-brands fa-github"></i>
                                </a>
                                <p>See this code</p>
                            </aside>
                        </article>
                        <article className="modalpicture">
                            <aside>
                                <aside>
                                    {msg!=null?
                                        msg.gallry.map((val)=>{
                                            return <img src={require(`../img/${val}`)}></img>
                                        })
                                    :null}
                                </aside>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    slidesPerView={1}
                                    navigation
                                    autoplay={{ delay: 2000,disableOnInteraction: false,}}
                                    pagination={{ clickable: true }}
                                >
                                    {createSlide()}
                                    {createSlide()}
                                    {createSlide()}
                                </Swiper>
                                
                            </aside>
                        </article>
                        
                    </section>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Work