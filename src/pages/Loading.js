import React from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import ParticleLoad from "../components/ParticleLoad";
function Load({page}){

    const navigate = useNavigate()
    const goNav=()=>{
        console.log(page)
        if(page=="home"){
            navigate("/")
        }else if(page=="about"){
            navigate("/about")
        }else if(page=="work"){
            navigate("/work")
        }
    }

    // Afetr 3 second , goNav function will be excuted
    window.setTimeout(goNav, 6000);

    return(
        <>
        <ParticleLoad></ParticleLoad>
        {/* <div className="load">
            <ReactLoading type={"spokes"} color="#fff" font-size="1000px"/>
            <p>Loading...</p>
        </div> */}
        <div id="load">
            <div>G</div>
            <div>N</div>
            <div>I</div>
            <div>D</div>
            <div>A</div>
            <div>O</div>
            <div>L</div>
        </div>
        </>
    )
};

export default Load;