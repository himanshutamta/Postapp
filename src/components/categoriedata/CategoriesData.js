import React from "react";
import "./CategoriesData.css"

const CategoriesData =  (props) => {
    return (
        <div className="categoriesData" key={props.element.id}>
            <div className="data_cat" >
            <h1>{props.element.data.title}</h1>
            <p>{props.element.data.desc}</p>
            </div>
        </div>
    )
}

export default CategoriesData;