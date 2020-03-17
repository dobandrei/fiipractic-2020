import React from "react"
import Button from "./button"
import Content from "./content"
import '../styles/style.css'

const myArray = [{
    text : '1',
    buttontext : 'Buton',
    type: 0
  },
  {
    text : '2',
    buttontext : 'Buton',
    type: 1
  },
  {
    text : '3',
    buttontext : 'Buton',
    type: 2
  }];

class Main extends React.Component {
    render(){
        return (
            <div className = 'main'>
                <div className = "buttonMain"> 
                    {myArray.map((obj,index)=> <Button key = {index} text = {obj} />)}
                </div>
                <Content />
            </div>
        )
    }
}

export default Main

