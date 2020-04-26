import React,{Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';

class Footer extends Component
{
    render(){
        return (
            
            <div className="pt-3 border-top-me ">     
                <Container className="pt-2 ">
                <Row  style={{height:200}}>
                    <Col sm={12} md={4} className="p-3 d-flex justify-content-center">
                        <div>
                            <h5 className="text-uppercase">Ajay Wilkins</h5>
                            <p>Hey !I’m a software engineer, aspiring entrepreneur, and a freelancer. I hope u found what u came for :D.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="p-3 d-flex text-dark justify-content-center">
                            <div>
                                <h5 class="text-uppercase">FOLLOW ME</h5>
                                <ul class="list-unstyled">
                                <li>
                                    <a href="#">Youtube</a>
                                </li>
                                <li>
                                    <a href="#">Facebook</a>
                                </li>
                                <li>
                                    <a href="#">Instagram</a>
                                </li>
                                <li>
                                    <a href="#">Fiverr</a>
                                </li>
                                </ul>
                            </div>
                    </Col>
                    <Col sm={12} md={4} className="p-3 d-flex text-dark justify-content-center">
                            <div>
                                <h5 class="text-uppercase">Pages</h5>
                                <ul class="list-unstyled">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About me</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Resume</a>
                                </li>
                                </ul>
                            </div>
                    </Col>
                </Row>           
                </Container>
                
                <Container className="pt-2 bg-dark text-light d-flex justify-content-center align-items-center" fluid>
                    
                            <p className="mx-5">Copyright © Ajay Wilkins 2020</p>
                
                </Container>
                
            </div>
        );
    }
} 

export default Footer;