import React from "react";
//import { ReactDOM } from "react";
//import {card,cards,card_info,series_title,sponser} from "./index.css"

function Card(props){
return(
<>
<div className="cards">
    <div className="card">
        <img src={props.imgscr} alt="image" className="imgcss" />  
        <div className="cardinfo">
            <p><span className="sponser"> {props.sponser} </span></p>
            <h3 className="series_title"> {props.series_title} </h3>
          <a href={props.link} target="_blank" ><button>Watch Now</button> </a>
               
         </div>     
    </div>
</div>
</>
);
}
export default Card;