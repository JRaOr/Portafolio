import React from "react";
import "../styles/star.css"

function StarBackgroug({title}){
    return(
        <div className="star">
            <section className="wrapper">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </section>
        </div>
    );
}

export default StarBackgroug;