import React from "react"
import '../styles/style.css'
import logoF from '../logo/facebook.png'
import logoI from '../logo/inlinked.png'
import logoT from '../logo/twitter.png'

class Footer extends React.Component {
    render(){
        return (
        <div className="footer">
            <div>
                <p>Copywrite &copy; 2020 Mr.Dob</p>
            </div>

            <div className = "logo">
                <a href = "#"><img src = {logoF}></img></a>
                <a href = "#"><img src = {logoI}></img></a>
                <a href = "#"><img src = {logoT}></img></a>
            </div>

        </div>
        )
    }
}

export default Footer