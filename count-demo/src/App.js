import React from "react";
import {useState} from "react";
import "./App.css"

function Count(){
    const [state, setstate] = useState(0);

    const addclass=()=>{
setstate(state+1)
    }  
    const removeclass=()=>{
setstate(state-1)
            }  
    
    return(
        <div className="wrapper">
            <div className="container"></div>
            <div className="row"></div>
    
      <div>
        <h1 className="add">{state}</h1>
        <div className="increment"><button onClick={addclass}>+</button>
        {state >=1 &&(
        <button onClick={removeclass}>-</button>
        )}
      </div>
            </div> 
                </div>
    
    
    )

  }
  export default Count