import React ,{useState}from "react";
function Maps(){
    let [counter,updateCount]=useState(0);
    return(
       <>
       <h1>Time is {counter}</h1>
    <button onClick={()=>{
        updateCount(++counter)
    }}>Add</button>
       </>
    )

    
}

export default Maps;