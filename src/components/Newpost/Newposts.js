import React from "react";
import './Newposts.css'
import Admintemplet from "../shardcomponent/Admintemplet";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPosts } from "../../redux-store/actions";


const Newposts = () => {
    const list = useSelector((state) => state.categoryReducer.list);

    const [inputs, setInputs] = useState('');
    const [paragraph, setPragraph] = useState('');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();

    
    const addMaterial = () => {
        const postData = {inputs, paragraph, category};
    
        if (inputs,paragraph,category) dispatch(addPosts(postData), setInputs(''), setPragraph(''));
    }


    return(
        <Admintemplet >
        <div className="newposts">
            <div className="newPosts_inner">
            <div className="newposta_In">
                <h1>Add New Post</h1>
                <label className="label1" >Title :</label>
                <input className="title" placeholder="text" type="text" value={inputs} onChange={(event) => setInputs(event.target.value)}/>
                <label className="label2">Paragraph :</label>
                <textarea className="paragraph" type="text" value={paragraph} onChange={(event) => setPragraph(event.target.value)}/>
                <button onClick={()=> addMaterial()}>Publish</button>
            </div>
            <div className="categorieAdd">
                <select
                 onChange={(e) => {
                    setCategory(e.target.value)}}>
                    <option>Categorie</option>
            {list.map((element) => {
                return(
                    <option value={element.data.title}>{element.data.title}</option>
                )
            })}
            </select>
            </div>
            </div>
        </div>
        </Admintemplet>
    )
}

export default Newposts;