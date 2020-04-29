import React,{Component} from 'react';
import {ProgressBar,Row,Col} from 'react-bootstrap';

export class Progressbar extends Component {
    state = {
        label:"",
        now:""
    }

    componentDidMount(){
        this.setState({
            label:this.props.label,
            now:this.props.now
        });
    }

    render(){
        const data = this.state.data;
        return(
            <Row className="pt-2">
                <Col className="" sm={12} md={2}>
                    <p  className="font-Robo font-weight-bold text-wrap" style={{fontSize:"2vw",overflow:"none"}}>{this.state.label}  </p>
                    
                </Col>
                <Col className="pt-sm-0 pt-md-2 pt-lg-3 mx-auto" sm={12} md={10}>
                <ProgressBar variant="info" animated now={this.state.now} label={this.state.now.toString() +"%"} />
                </Col>
              </Row>
        );
    }
}
              
