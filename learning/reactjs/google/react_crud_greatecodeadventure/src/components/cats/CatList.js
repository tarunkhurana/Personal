import React,{PropTypes} from "react";
import {Link} from "react-router";

const CatList=({cats})=>{
    return(
        <ul className="list-group">
            {cats.map(cat=>{
                return <li className="lsit-group-item" key={cat.id}>
                   <Link to={`/cats/${cat.id}`}>{cat.name}</Link> 
                </li>
            })}
        </ul>
    )
}

CatList.propTypes={
    cats:PropTypes.array.isRequired
}

export default CatList;