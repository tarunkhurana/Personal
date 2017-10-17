import React from "react";

const Tags=({tags,onClickTag})=>{
    if(tags){
    return(
        <div className="tag-list">
            {
                tags.map(tag=>{
                    const handleClick=ev=>{
                        ev.preventDefault();
                         onClickTag(tag)

                    }
                    return (
                        <a href=""  onClick={handleClick} className="tag-default tag-pill" key={tag}>{tag}</a>
                    )
                })
            }
        </div>
    )
  } else {
      return(
          <div>Loading tags....</div>
      )
  }
}

export default Tags;