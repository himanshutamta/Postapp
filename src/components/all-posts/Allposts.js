import React from "react";
import "./Allposts.css"
import Admintemplet from "../shardcomponent/Admintemplet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Allposts = () => {
    const list = useSelector((state) => state.addpostReducer.list);

    return(
        <Admintemplet>
        <div className="all_posts">
                <h1>All Posts</h1>
                {list.map((element) => {
                    return(
                        <div className="all_posts1" key={element.id} >
                        <div>
                        <Link className="post_Link" to={`/posts/all_post/${element.id}`}>{element.data.inputs}</Link>
                        <p>{element.data.paragraph}</p>
                        <span>{element.data.category}</span>
                        </div>
                    </div>
                    )
                  
                })}
        </div>
        </Admintemplet>
    )
}

export default Allposts;