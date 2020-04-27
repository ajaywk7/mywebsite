import React,{Component} from 'react';
import {Container,Col,Row,Jumbotron,Image,Button} from 'react-bootstrap';
import mern from '../pictures/mern.png';
import homeintro from '../pictures/image.png';
import parall2 from '../pictures/work2.jpg';
import blog from '../pictures/blog.jpg';


import {Title} from '../components/title';
import {Works} from '../components/works';
import {Parallax,Background} from 'react-parallax';



export class Home extends Component{
    render (){
        return (
            <div >
                <Parallax bgImage={homeintro} strength={500}>
                    <div  style={{ height:700,zIndex:0}}>
                        <div className="d-flex align-items-center justify-content-center h-100" >
                            <div className="">
                            <h1 className="Hero text-center font-Robo"> 
                                i'm <strong>Ajay Wilkins</strong>
                             </h1>
                             <div className="underHero mx-auto d-flex justify-content-center align-items-center pt-3" >
                                 <p className="font-Robo ">FULL STACK DEVELOPER</p>
                             </div>
                            </div>                            
                        </div>
                    </div>
                </Parallax>
                <Title title="about me"/>
                <Container>
                    <p className="content">  I am a freelancer aspiring to provide various apt technological solutions to the tech community . I have always loved the essence of programming and it is the only reason i am standing where i am in my educational path.I have worked on various Academic projects and the ones that i loved the most working on are the Web App development projects . I have both experience and knowledge on how Web Applications work. I am acquainted with web technology stacks like MERN (Mongo, Express ,React js, Node js) and i have also worked with Flask+React stack for web app development. This website was a learning project for me as i got more acquainted with both front end and backend development using the MERN stack. </p>
                    <Container className="p-5 " fluid>
                        <Row className="">
                            <Col sm={12} md={6}>
                                <Image src={mern} className="h-100 w-100"/>
                            </Col>
                            <Col sm={12} md={6}>
                                <Container className="d-flex align-items-center justify-content-center h-100 p-5" >
                                    <div>
                                    <h1 className="font-pomp text-center">~ I love MERN stack ~</h1><br/>
                                    <p className="text-center font-pomp"> MONGO | EXPRESS JS | REACT JS | NODE JS </p>
                                    <p className="text-center font-Robo">
                                        yes , I do ! . But I also love learning newer and challenging web frameworks just for the fun of it. 
                                    </p>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Parallax  bgImage={parall2} strength={400}>
                    <div  style={{ height:500,zIndex:0}}>
                        <div style={{backgroundColor:"black",overflow:"auto",width:"100%",height:500,opacity:0.5}} />
                    </div>
                </Parallax>
                
                <Works  />
                <br />
                <br />
                <br />
                <Container className="pl-4 pr-4 ">
                        <Row className="">
                            <Col sm={12} md={6}>
                                <Image src={blog} className="h-100 w-100"/>
                            </Col>
                            <Col sm={12} md={6}>
                                <Container className="d-flex align-items-center justify-content-center h-100 p-5" >
                                    <div>
                                    <h1 className="font-pomp text-center">~ WAIT !! I also have a Blog ~</h1><br/>
                                    <p className="text-center pt-0 font-Robo">
                                        So do give it a shot :D.
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center h-100 " >
                                    <Button className="button"><span>VISIT</span> </Button>
                                    </div>
                                    
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                    <br/>
                    
            </div>
        );
    }
}