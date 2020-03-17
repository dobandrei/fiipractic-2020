import React from "react"
import '../styles/style.css'

let array = [1,2,3,4,5,6,7,8,9,10];

class Nav extends React.Component {
    
        render(){
            return (
                <div className = 'nav'> 
                    <ul>
                        {array.map(x => <a href = "#"><li>Side menu {x}</li></a>)}
                    </ul>
                </div>
            )
        }
    }
    


export default Nav