import React from "react"
import Button from "./button"
import ContentText from "./contentText"
import Content from "./content"
import '../styles/style.css'

const myArray = [{
    buttontext : 'Buton',
    type: 1
  },
  {
    buttontext : 'Buton',
    type: 2
  },
  {
    buttontext : 'Buton',
    type: 3
  }];

class Main extends React.Component {
    render(){
        return (
            <div className = 'main'>
                <div className = "buttonMain"> 
                    {myArray.map((obj,index)=> <Button key = {index} text = {obj} />)}
                </div>
                <ContentText />
                <Content />
                
            </div>
        )
    }
}

export default Main

