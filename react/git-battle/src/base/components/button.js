import React from "react"
import "../styles/style.css"

class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
        this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount () {
        const click = this.state.counter + this.props.text.type;
        this.setState({
            counter: click
        })
    }

    render(){
        let color = "button" + this.props.text.type
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <button className= {color} onClick = {this.incrementCount}>{`${this.props.text.buttontext} + ${this.props.text.type}`}</button>
            </div>
        )
    }
}


export default Button