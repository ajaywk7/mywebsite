import React,{Component} from 'react';
import {Container,Col,Row,Jumbotron,Image,Button} from 'react-bootstrap';
import mern from '../pictures/mern.png';
import homeintro from '../pictures/image.png';
import parall2 from '../pictures/work2.jpg';
import blog from '../pictures/blog.jpg';
import {Service} from '../components/service';
import video1 from '../video/video1.mp4';


import {Title} from '../components/title';
import {Works} from '../components/works';
import {Parallax,Background} from 'react-parallax';



export class Home extends Component{
    render (){
        return (
            <div >
                {/*<Parallax bgImage={homeintro} strength={500}>
                    <div  style={{ height:700,zIndex:0}}>
                        
                    </div>
                </Parallax> */}
                <div class="video-container w-100 h-100">
                    <video id="video" style={{height:700,width:"100%",objectFit:"cover",objectPosition:"center"}} autoPlay muted loop>
                        <source src={video1} type="video/mp4" />
                    </video>
                    <div className="overlay d-flex align-items-center justify-content-center h-100 w-100"  >
                            <div className="">
                            <h1 className="Hero text-center font-Robo"> 
                                i'm <strong className="">Ajay Wilkins</strong>
                             </h1>
                             <div className="underHero mx-auto d-flex justify-content-center align-items-center pt-3" >
                                 <p className="font-Robo ">FULL STACK DEVELOPER</p>
                             </div>
                            </div>                            
                </div>
                </div>
                
                
                <br/>
                <Title title="about me"/>
                <Container>
                    <p className="content text-center">  I’m Ajay Wilkins, a product designer passionate about experiences.An ambitious freelancer based on India focusing on creating bold solutions for meaningful businesses. I am an experienced MERN stack developer who can help you with your business . I can provide services ranging from making a simple one page portfolio website to creating an e-commerce platorm for your brand .  </p>
                   
                    <br/>
                    <Service  />
                    <br/>
                    <div className="pt-4 d-flex justify-content-center align-items-center">
                            <Button href="/aboutme" className="button w-120"><span>Learn more</span></Button>
                        </div>
                    <br/>
                    <br/>
                    {/*<Container className="p-5 " fluid>

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
                        <div className="pt-4 d-flex justify-content-center align-items-center">
                            <Button href="/aboutme" className="button w-120"><span>Learn more</span></Button>
                        </div>
                    </Container>*/}
                </Container>
                <Parallax  bgImage={parall2} strength={400}>
                    <div  style={{ height:500,zIndex:0}}>
                        <div style={{backgroundColor:"black",overflow:"auto",width:"100%",height:500,opacity:0.5}} />
                    </div>
                </Parallax>
                
                <Works  />
                <br/>
                <br/>
                    
            </div>
        );
    }
}