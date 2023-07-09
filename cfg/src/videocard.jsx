import React from 'react'
import "./videocart.css"


export const Videocard = (props) => {
    
  return (
   
        <div className="card">
            <h3>{props.myProp}</h3>
            <div>Description of {props.myProp} </div>
            <div>Link</div>
            <div>Review</div>
          </div>
    
  )
}
