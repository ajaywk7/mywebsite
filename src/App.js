import React,{Component} from 'react';
import './App.css';
import Router from './components/router';
import {Link} from 'react-router-dom';
import {Container,Nav,Navbar} from 'react-bootstrap';
import Footer from './components/footer';

class App extends Component {

  render(){
    return (
        <div>
          <Container className="p-0 fullPage navbar-clr" fluid>
          <Navbar collapseOnSelect className=" p-0" expand="lg" bg="light" variant="light">
            <Container className="p-0">
            <Navbar.Brand  href="/"><h3 className="bigTitle pt-2 font-robo">AJAY WILKINS</h3></Navbar.Brand>
            <Navbar.Toggle   aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
              <Nav className="NavItems" >
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/contactme">Let's Talk</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
          <Router/>
          <Footer />
          </Container>
        </div>
    );
  }
}

export default App;
