import React,{Component} from 'react';
import {Form,Button, Container} from 'react-bootstrap';
export class Contactme extends Component{
    render (){
        return (
            <div>
                <Container className="p-5">

                <Form>
                    <h1 className="font-Robo text-center pb-5">U can ping me through this :) </h1>
                    <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>     
                </Container>                  
            </div>
        );
    }
}