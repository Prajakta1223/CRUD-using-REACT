import React from "react";
import { Link } from "react-router-dom";
import "./Homestyle.css";

const Home=()=>
{
    return(
    <div className="style">
         
        <h3>Click below to add the  New User ⬇</h3>
        <Link to="/add"className="link">Add</Link>
    </div>
    );
}

export default Home;