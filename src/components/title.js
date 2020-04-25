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
                <h1 className="font-pomp text-uppercase  mt-4 mb-2 text-center display-7 font-weight-bold">{this.state.title}</h1>
                <div className="title-border d-flex mx-auto mb-3"></div>
            </div>
        );
    }
}