import React from 'react';
import Button from './components/button'
import Footer from './components/footer'
import Header from './components/header'
import './App.css';

const myArray = [{
  text : 'Apasa aici!',
  buttontext : 'Buton1',
  type: 0
},
{
  text : 'Oare sa apas?',
  buttontext : 'Buton2',
  type: 1
},
{
  text : '?????????',
  buttontext : 'Buton3',
  type: 2
}];

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <Header />
    {myArray.map((obj,index)=> <Button key = {index} text = {obj} />)}
        <Footer />
      </div>
    );
  }
}

export default App;
