import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import {Home} from '../pages/home';
import Blog from '../pages/blog';
import {Contactme} from '../pages/contactme';
import {Container,Nav,Navbar} from 'react-bootstrap';
import Footer from './footer';


class Router extends Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contactme" component={Contactme} />
            </Switch>
        );
    }
    
}
export default Router;