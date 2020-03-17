import React from 'react';
import Main from './components/main'
import Nav from './components/nav'
import Footer from './components/footer'
import Header from './components/header'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">

      <header className= "headerContainer">
        <Header />  
      </header>

      <main className= "mainContainer">
        <Nav />
        <Main />
      </main>

      <footer className= "footerContainer">
        <Footer />
      </footer>

      </div>
    );
  }
}

export default App;
