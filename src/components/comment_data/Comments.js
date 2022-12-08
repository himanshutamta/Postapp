import React from "react";
import { addComment } from "../../redux-store/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Admintemplet from "../shardcomponent/Admintemplet";
import { useParams } from "react-router-dom";
import "./Comments.css"
import { Category } from "@mui/icons-material";


const Comments = () => {

    const [comment, setComment] = useState('');
    const newcomment = useSelector((state) => state.addCommentReducer.list);
    const list = useSelector((state) => state.addpostReducer.list);

    const {id} = useParams();
    const post = list.filter(e => e.id == id);
    const dispatch = useDispatch();

    const comm = newcomment.filter(e => e.id == id);
    return (
        <>
        
        <Admintemplet >
        <div className="about_post"> 
        {post.map((element) => {
                    return(
                        <div className="my_posts1" key={element.id} >
                        <div>
                        <h2>{element.data.inputs}</h2>
                        <p>{element.data.paragraph}</p>
                        <span><Category />{element.data.category}</span>
                        </div>
                    </div>
                    )
                  
                })}
            <div className="my_comment">
            {comm.map((element) => {
                // console.log(element)
                return (
                    <p>Comment : {element.data}</p>
                )
            })}
        </div>
            <div className="comment_section">
                <label>Comment</label>
                <input type="text" value={comment} onChange={(event) => setComment(event.target.value)} />
                <button type="submit" onClick={() => dispatch(addComment({comment,id}), setComment(''))}>Add</button>
            </div>
        </div>

        </Admintemplet>
        </>
    )
}

export default Comments;