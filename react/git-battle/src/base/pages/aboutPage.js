import React from 'react';
import About from '../components/about'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Header from '../components/header'
import ContentText from '../components/contentText';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="App">

      <header className= "headerContainer">
        <Header />  
      </header>

      <main className= "mainContainer">
        <Nav />
        <About/> 
        <ContentText />     
      </main>

      <footer className= "footerContainer">
        <Footer />
      </footer>

      </div>
    );
  }
}

export default AboutPage;
