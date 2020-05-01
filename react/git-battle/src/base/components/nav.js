import React from "react"
import '../styles/style.css'

let array = [1,2,3,4,5,6,7,8,9];

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened : false,
            navMenuName : "Navigation Menu",
        }   

        this.toggleSelect = this.toggleSelect.bind(this);
        this.getOptions = this.getOptions.bind(this);
    }    

    toggleSelect () {
        this.setState({
            isOpened : !this.state.isOpened
        });
    }

    getOptions () {
        if (this.state.isOpened) {
            return (
            <ul>
                {array.map(x => <li>Side menu {x}</li>)}
            </ul>)
        }   
    }

        render(){
            return (
                <div className = 'nav'> 
                    <p onClick = {this.toggleSelect}> {this.state.navMenuName}</p>
                    {this.getOptions()}
                </div>
            )
        }
}
    


export default Nav