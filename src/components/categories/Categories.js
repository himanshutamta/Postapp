import React from "react";
import "./Categories.css"
import CategoriesData from "../categoriedata/CategoriesData";
import Admintemplet from "../shardcomponent/Admintemplet";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { add_Category } from "../../redux-store/actions";


const Categories = () => {

    const [title,setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const dispatch = useDispatch();

    const list = useSelector((state => state.categoryReducer.list))
    const cate_Data = { title,desc }

    const forElement = () =>{
        if(title,desc) return dispatch(add_Category(cate_Data), setTitle(''), setDesc(''))
    }


    return(
        <Admintemplet>
        <div className="categories">
            <div className="categories_In">
                <h1>Categories</h1>
                <h3>Add New Category</h3>
                <label>Name</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <label>Description</label>
                <textarea type="text" value={desc} onChange={(event) => setDesc(event.target.value)}/>
                <button type="submit" onClick={() => forElement()}>Add New category</button>
            </div>
            <div className="data_here">
                {list.map((element) => {
                    return(
                        <div className="data_here"><CategoriesData element={element}/></div>
                    )
                })}
            </div>
        </div>
        </Admintemplet>
    )
}

export default Categories;