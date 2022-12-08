import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { PushPin } from "@mui/icons-material";
import { PermMedia } from "@mui/icons-material";


const Navbar = () => {
    return(
    <div className="navbar">
        <nav>
            <ul>
                <li className="dropdown">
                <Link className="a" to="/"><PushPin />Posts</Link>
                <ul>
                    {/* <li><Link className="posts" to='/'>All Posts</Link></li> */}
                    <li><Link className="posts" to='/posts/add_new'>Add New</Link></li>
                    <li><Link className="posts" to='/posts/categorie'>Categories</Link></li>
                </ul>
                </li>
                <li>
                <Link className="a" to="/"><PermMedia /> Media</Link>
                </li>
                <li>
                <Link className="a" to="/">Dashboard</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Navbar;