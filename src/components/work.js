import React,{Component} from 'react';
import {Modal,Button,Image} from 'react-bootstrap';

export class Work extends Component 
{
    state = {
        data:""
    }

    componentDidMount(){
        this.setState({
            data:this.props.data
        })
    }

    render(){
        
                var data = this.state.data;
                
                return (
                <div>
                    <Modal
                    show={this.props.show}
                    onHide = {this.props.onHide}
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    
                    <Modal.Header   closeButton>
                    <Modal.Title  id="contained-modal-title-vcenter">
                            <h3 className="font-pomp text-center font-weight-bold">WORK DETAILS</h3>
                        </Modal.Title>
                    </Modal.Header>
                   
                    <div className="pt-0 w-100" style={{backgroundImage:"url('"+data.image+"')",backgroundSize:"cover",height:400}}>
                        <div className="h-100 w-100 d-flex justify-content-center align-items-center" style={{background:"black",overflow:"auto",opacity:"0.6"}}>
                        <h1 className="font-Robo text-uppercase text-light">{data.title}</h1>
                        </div>                       
                    </div>
                    
                    
                    
                    <Modal.Body className="p-5">
                    <div dangerouslySetInnerHTML={{ __html: data.text }} />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                    </Modal>
                </div>
            );
         
    
    
    }
}
