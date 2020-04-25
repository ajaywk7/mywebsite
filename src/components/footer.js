import React,{Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';

class Footer extends Component
{
    render(){
        return (
            <div className="border-top-me pt-3">                
                <Container className="p-0">
                    <Row className="p-0 ">
                        <Col sm={12} md={3} className="mr-auto pl-3">
                        </Col>
                        <Col sm={12} md={3} className="ml-auto pb-3 pl-3">
                            <p className="float-md-right">Copyright © Ajay Wilkins 2020</p>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
} 

export default Footer;