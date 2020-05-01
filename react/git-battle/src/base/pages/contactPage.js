import React from 'react';
import Contact from '../components/contact'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Header from '../components/header'


class AboutPage extends React.Component {
  render() {
    return (
      <div className="App">

      <header className= "headerContainer">
        <Header />  
      </header>

      <main className= "mainContainer">
        <Nav />
        <Contact/>      
      </main>

      <footer className= "footerContainer">
        <Footer />
      </footer>

      </div>
    );
  }
}

export default AboutPage;
