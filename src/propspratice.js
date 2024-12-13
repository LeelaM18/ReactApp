import React from "react"
function User(props){
    return(
        <div className="card">
            <div className="top">
           <h2 className="name">{props.name}</h2>
           <img className="card-img" src={props.img} ></img>
            </div>
             <div className="bottom">
           <p>{props.mobile}</p>
           <p>{props.place}</p>
             </div>
        </div>
    )
}

export default User;