import React,{Component} from 'react';

import {Title } from './title';
import {MyCard} from './MyCard';
import { Container,Row} from 'react-bootstrap';
import {Work} from './work';


 

export class Works extends Component{
    state = {
        cards:"",
        showWork : false,
        modal :"" 
        }

    switchModal = () => {
        var showWork = this.state.showWork;
        showWork = !showWork;
        this.setState({
            showWork:showWork,
            modal:""
        });
    }

    loadData = (data) => {
        return (
            <Work show={this.state.showWork} onHide={this.switchModal} data={data} />
        );
    }

    selectWork = async(data) => {
        await this.switchModal();
        var modal =await this.loadData(data);
        await this.setState({
            modal:modal

        });
        
        
    }

    itercards = (data) => {
            return (
                    <MyCard data={data} selectWork={this.selectWork} />
            );
        }
    
    async componentDidMount(){
        var response = await fetch('https://ajay-blog-backend.herokuapp.com/posts');
        var data = await response.json();
        var data = data.map(this.itercards); 
        this.setState({
            cards:data,
        })
        
        //console.log(y);

    }
    render (){
        const cards = this.state.cards;
        return (
            <div className="pt-2">
                {this.state.modal}
                <Title   title="My Works" />
                <p className=" pt-2 content font-Robo text-center "> This maybe a very small list. but i am sure there are many yet to come :). </p>

                <Container className="">
                    <Row>
                        {cards}
                    </Row>
                </Container>
            </div>
        );
    }
}