import React from "react";
import Navbar from "../navbar/Navbar";
import "./Admintemplet.css"


const Admintemplet = (props) => {
    return(
        <div className="Admintemplet">
            <div className="left_navbar"><Navbar /></div>
            <div className="left_admintemplet">{props.children}</div>
        </div>
    )
}

export default Admintemplet;