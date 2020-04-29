import React,{Component} from 'react';
import {Card,Col,Image,Container,Button} from 'react-bootstrap';

export class MyCard extends Component {
    state = {
        data : ""
    }

    componentDidMount(){
        const data = this.props.data;
        if(data.preview.length > 70)
        {
        data.preview = data.preview.substr(0,70) +"......";
        }
        if(data.title.length > 70)
        {
        data.title = data.title.substr(0,70) +"......";
        }

        this.setState({
            data:data           
        })

    }

    render(){
        const data = this.state.data;
        return(
            <Col sm={12} md={4} className="p-3 pb-2  w-100 h-100">
            <Card className="card shadow h-100 w-100 pointer-cursor" onClick={()=>this.props.selectWork(data)}  >
                <Card.Img src={data.image} variant="top" style={{height:250,objectFit:"cover"}}  />
                <Container className="p-2 text-center" style={{height:50}} fluid>
                <Card.Title className="text-uppercase font-pomp font-weight-bold">
                    {data.title}
                </Card.Title>
                </Container>
            </Card>   
            </Col>
                 
        );
    }
}