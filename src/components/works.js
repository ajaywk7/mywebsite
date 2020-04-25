import React,{Component} from 'react';

import {Title } from './title';
import {MyCard} from './MyCard';
import { Container,Row, Button,Card } from 'react-bootstrap';


const itercards = (data) => {
    return (
            <MyCard data={data} />
    );
}

export class Works extends Component{
    state = {
        cards:""
        }
    
    async componentDidMount(){
        var response = await fetch('https://ajay-blog-backend.herokuapp.com/projects');
        var data = await response.json();
        var data = data.map(itercards); 
        this.setState({
            cards:data
        })
        
        //console.log(y);

    }
    render (){
        const cards = this.state.cards;
        return (
            <div className="pt-2">
                <Title   title="My Works" />
                <p className="content font-Robo text-center "> This maybe a very small list. but i am sure there are many yet to come :). </p>

                <Container className="">
                    <Row>
                        {cards.slice(0,6)}
                        {this.visitBlog}
                    </Row>
                </Container>
            </div>
        );
    }
}