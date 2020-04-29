import React,{Component} from 'react';
import {Container, Row,Col,Image, ProgressBar} from 'react-bootstrap';
import {Title} from '../components/title';
import {Progressbar} from '../components/progressbar';
import avatar from '../pictures/avatar.jpg';
import parall2 from '../pictures/work2.jpg';
import {Parallax} from 'react-parallax';
export class Aboutme extends Component 
{
    
    render(){
        
                
                return (
                <div>
                     <Container className="pl-2 w-100 d-flex justify-content-center align-items-center " style={{height:500}} fluid>
                        <Container className="text-dark text-left quote-wrapper" > 
                            <h1 className="font-Robo quote">
                            Websites promote you 24/7: No employee will do that.<br />
                            </h1>
                            <h2 className="quote">
                            ― Paul Cookson
                            </h2>
                        </Container> 
                    </Container>
                    
                    <Container className="container-wrapper " >
                        <p className="content ">  I am a freelancer aspiring to provide various apt technological solutions to the tech community . I have always loved the essence of programming and it is the only reason i am standing where i am in my educational path.I have worked on various Academic projects and the ones that i loved the most working on are the Web App development projects . I have both experience and knowledge on how Web Applications work. I am acquainted with web technology stacks like MERN (Mongo, Express ,React js, Node js) and i have also worked with Flask+React stack for web app development. This website was a learning project for me as i got more acquainted with both front end and backend development using the MERN stack. </p>
                        <br/>
                        <br/>
                        <Row>
                            <Col className="d-flex justify-content-center align-items-center" sm={12} md={6}>
                                <img className="avatar" src={avatar}  />                            
                            </Col>
                            <Col className="p-5 d-flex justify-content-center align-items-center text-center"  sm={12} md={6}>
                                <div>
                                <h1 className="font-pomp display-5">i am <span style={{color:"#1b262c",fontWeight:"bold"}}> AJAY WILKINS </span> </h1>
                                <h2 className="font-pomp display-5">i am a <span style={{color:"#1b262c",fontWeight:"bold"}}> CREATIVE </span> web developer </h2>
                                <h2 className="font-pomp display-5">i am a student and a <span style={{color:"#1b262c",fontWeight:"bold"}}> FREELANCER </span> </h2>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                  

                    </Container>
                    
                    <br/><br/>
                    <Parallax  bgImage={parall2} strength={400}>
                    <div  style={{ height:300,zIndex:0}}>
                        <div style={{backgroundColor:"black",overflow:"auto",width:"100%",height:500,opacity:0.5}} > 

                        </div>
                    </div>
                    </Parallax>
                    <br/>
                    <Container>
                    <Title title="Skillset :" />
                    <p className="font-Robo text-center"> This is just a chart to show you my <strong>level of expertise</strong> in the following languages: </p>

                    <Progressbar label="HTML/CSS" now={90} />
                    <Progressbar label="Javascript" now={85} />
                    <Progressbar label="Dart" now={40} />
                    <Progressbar label="Python" now={85} />
                    <Progressbar label="Java" now={80} />
                    <Progressbar label="SQL" now={85} />
                    </Container>
                    <br/>
                    <Container>
                    <Title title="Experience :" />
                    <p className="font-Robo text-center"> These are my <strong>experience levels</strong> on the following platforms </p>
                    <Progressbar label="Node JS" now={85} />
                    <Progressbar label="React JS" now={90} />
                    <Progressbar label="Flask" now={90} />
                    <Progressbar label="Flutter" now={40} />
                    <Progressbar label="Mongo" now={90} />
                    <br/><br/>





                    </Container>
                </div>
            );
         
    
    
    }
}
