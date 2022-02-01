import React, {Component} from "react";
import reactDom from "react-dom";

class Todos extends Component{
    render(){
        return(
            <div>
                "Check Box"<input type="checkbox" checked={true} /> 
            </div>     
        )
    }
}

export default Todos