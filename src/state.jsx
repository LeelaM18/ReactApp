  import React from "react";
  class App extends React.Component{
    state={
        product:"one plus 12R",
        price:18000
    }
    
    render(){
       return(
           <>
           <h1>{this.state.product}</h1>
           <h1>{this.state.price}</h1>
           <input  id="price"/>
           <button onClick={
            ()=>{
                let p=document.getElementById('price').value;
              console.log(p);
              this.setState(
                {
                    price:p
                }
              )
            }
           }> update</button>
           </>
       )
    }
 }

export default App;