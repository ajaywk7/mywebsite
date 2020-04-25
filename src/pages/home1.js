import React,{Component} from 'react';
import {Container,Col,Row,Jumbotron,Image,Button} from 'react-bootstrap';
import avatar from './avatar.jpg';
import {Title} from '../components/title';
import {RecentPosts} from '../components/recentposts';

export class Home extends Component{
    render (){
        return (
            <div >
                <Container className="homepageIntro" fluid>
                    <Row className="h-100"> 
                        <Col xs={12} sm={5} className="mt-auto mb-auto " >
                            <Image src={avatar} className="avatar center"  roundedCircle />
                        </Col>
                        <Col xs={12} sm={7} className="mt-auto mb-auto text-light text-sm-left text-center ">
                                <h1 className="Hero "> I’m Ajay, a software developer passionate about learning experiences. </h1>
                            <Button className="button ">
                                <span>portfolio</span>
                            </Button>
                            <Button className="button ">
                                <span>blog</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Title title="Recent Posts" />
                <RecentPosts />
                <Container fluid className=" gray-gradient">
                    <br></br>
                    <Title title="about me"/>
                    <Container>
                        <p className="content">  I am still a student aspiring to become someone who can be a part of providing various apt technological solutions in the future . I have always loved the essence of programming and it is the only reason i am standing where i am in my educational path.I have worked on various Academic projects and the ones that i loved the most working on are the Web App development projects . I have both experience and knowledge on how Web Applications work. I am acquainted with web technology stacks like MERN (Mongo, Express ,React js, Node js) and i have also worked with Flask+React stack for web app development. I also have some basic knowledge in Android App development. I would consider Python to be my favorite programming language because i just love how versatile the language is . But i wouldn't stop myself from learning complex programming languages as proof Java is the language which i am the strongest in next to Python.  </p>
                    </Container>
                </Container>
            </div>
        );
    }
}