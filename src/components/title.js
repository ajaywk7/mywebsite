import React,{Component} from 'react';

export class Title extends Component{
    state = {
        title : ""
    }

    componentDidMount(){
        this.setState({
            title:this.props.title
        })
    }
        
    render (){
        return (
            <div className="">
                <h3 className="font-pomp text-uppercase  pt-5  mb-1 text-center font-weight-bold text-dark">{this.state.title}</h3>
                <div className="title-border border-dark d-flex mx-auto mb-3"></div>
            </div>
        );
    }
}