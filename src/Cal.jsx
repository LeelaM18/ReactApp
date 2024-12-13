import { useState } from "react";
import Keypad from "./keypad";
function Cal(){
    let [input,setInput]=useState("");

    function handleClick(value){
setInput(input+value);
    }
    function calculate(value){
        let outputVal=eval(input);
        setInput(outputVal);
    }
    function handleClear(){
        setInput("")
    }
    return(
        <>
        <div className="container">
            <h1>Calculator App</h1>
            <div className="calculator">
            <input className="output" value={input}></input>
            <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}/>
            </div>
        </div>
        </>
    )
}

export default Cal;