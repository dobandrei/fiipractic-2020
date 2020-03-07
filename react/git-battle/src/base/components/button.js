import React from "react"
import "../styles/style.css"

class Button extends React.Component {
    constructor(props){
        super()
    }
    render(){
        let color = "button" + this.props.text.type
        return (
            <div>
                <h2>{this.props.text.text}</h2>
                <button className= {color} >{this.props.text.buttontext}</button>
            </div>
        )
    }
}


export default Button