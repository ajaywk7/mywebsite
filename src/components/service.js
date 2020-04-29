import React,{Component} from 'react';
import {Card,Col,Row,Image,Container,Button} from 'react-bootstrap';
import {RiCodeSSlashLine} from 'react-icons/ri';
import {FcBusiness,FcPhoneAndroid} from 'react-icons/fc';
import {DiPhonegap} from 'react-icons/di';

export class Service extends Component {
    state = {
        data : ""
    }

   

    render(){
        const data = this.state.data;
        return(
          <Container >
              <Row className="p-0">
                <Col sm={12} md={4} className="pr-0 mr-0 d-flex justify-content-center align-items-center text-dark" style={{width:500}}  >
                    <Container className="service">
                    <div className="pt-5 pb-2 d-flex justify-content-center align-items-center">
                        <FcBusiness  size={85} title="Freelancer" />
                    </div>
                    <h5 className="pl-3 pr-3 pb-2 font-Robo text-uppercase font-weight-bold text-center">Freelancer</h5>
                    <p className="pl-3 pr-3  text-center" > I freelance for all kinds of projects under my expertise </p>
                    </Container>
                </Col>
                <Col sm={12} md={4} className="pl-0 pr-0 mr-0 w-100 h-100 d-flex justify-content-center align-items-center text-dark"  >
                    <Container className="service">
                    <div className="pt-5 pb-2 d-flex justify-content-center align-items-center">
                        <RiCodeSSlashLine  size={85} title="ajay" />
                    </div>
                    <h5 className="pl-3 pr-3 pb-2 font-Robo text-uppercase font-weight-bold text-center">Full Stack Dev</h5>
                    <p className="pl-3 pr-3  text-center" > I develop attractive Full stack web apps with the MERN stack </p>
                    </Container>
                </Col>
                <Col sm={12} md={4} className="pl-0 w-100 h-100 d-flex justify-content-center align-items-center text-dark"  >
                    <Container className="service">
                    <div className="pt-5 pb-2 d-flex justify-content-center align-items-center">
                        <FcPhoneAndroid  size={85} title="ajay" />
                    </div>
                    <h5 className="pl-3 pr-3 pb-2 font-Robo text-uppercase font-weight-bold text-center">Flutter Dev</h5>
                    <p className="pl-3 pr-3  text-center" > I develop attractive Android and IOS apps with the Flutter </p>
                    </Container>
                </Col>
            </Row>
          </Container>
            
        );
    }
}