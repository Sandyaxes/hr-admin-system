import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import './hamburger.css'

function Hamburger({title}) {

    const handleHamBurger = () => {
        const hamburger = document.querySelector(".hamburger");

        hamburger.addEventListener("click", function(){
        document.querySelector("body").classList.toggle("active");
        })
    }

  return (
    <div className="wrapper">
      <div className="section">
        <div className="top_navbar" onClick={handleHamBurger}>
           <div className="hamburger">
            <Link to="#" >
                <FaIcons.FaBars />
            </Link>
            <text >{title}</text>
        </div>
    </div>
</div>
</div>
  )
}

export default Hamburger