import react from "react";
import { Component } from "react";
import './input.scss'

class Input extends Component{

    render(props){
        let {label, type,placeholder, onChange,value, name}= this.props;

        return(
           
               <div  className="input-container">
                  
                <input value={value} type={type} name={name}onChange={onChange} required placeholder={placeholder}></input>
                <label  >{label}</label>
                </div>

        )
    }
}

export default Input;