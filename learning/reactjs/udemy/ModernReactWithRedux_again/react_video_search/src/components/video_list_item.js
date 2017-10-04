import React from "react";

const VideoListItem=({video,onVideoSelect})=>{
       const {snippet}=video;
       const {title}=snippet;
       const {thumbnails:{default:{url}}}=snippet;

        return (
        <li onClick={()=>onVideoSelect(video)} className="list-group-item">
         <div className="video-list media">
             <div className="media-left">
                 <img className="media-object" src={url}/>
             </div>
             <div className="media-body">
                 <div className="media-heading">
                    {title}
                 </div>
             </div>
         </div>
        </li>
        )
    
}

export default VideoListItem;