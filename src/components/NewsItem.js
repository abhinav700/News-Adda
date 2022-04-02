import React from "react";
import { useState } from "react";
const NewsItem =(props) =>{
  const [bg, setBg] = useState("");
  const setColor=(theme)=>{
     if(theme==="primary")
     {
       setBg("blue")
       
      }
      
    }
    let {theme,title, description, imageUrl, newsUrl, author, date } = props;
    setColor(props.theme)
   
    return (
      
      <>
      <div className="container centre" >
        <div className="card my-3 mx-3" >
          <img
            src={
              imageUrl != null
                ? imageUrl
                : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3p0WmHS0YgRW2Mb32q97X8&ust=1632901199589000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCCh5KVofMCFQAAAAAdAAAAABAD"
            }
            className="card-img-top centre"
            alt="..."
          />
          <div className="card-body" style={{backgroundColor:`${bg}`}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                published by {!author ? "unknown" : author} on{" "}
                {!date ? "some days ago" : new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
    );
  
}

export default NewsItem;
