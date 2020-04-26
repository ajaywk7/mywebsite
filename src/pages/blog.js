import React,{Component} from 'react';
import blogImg from '../pictures/blog3.jpg';
import {Blogpost} from '../components/blogpost'
import {Title} from '../components/title';
import {Parallax} from 'react-parallax'; 
import {Container,Col,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
 

 class Blog extends Component{
    state = {
        posts : "",
        processedPosts :"",
        categories : ""
    }

    chooseCategory = (category) => {
      


    }

    createCategories = (data) => {
        return (
            <div>
            <Link className="link-hover" to={this.chooseCategory({data})}>
                <h7 className="pl-2 text-dark text-uppercase">{data}</h7>
            </Link>
            </div>
        )
    }

    createPosts = (data) => {
        return (
            <Blogpost data={data} ></Blogpost>
            
        )
    }

    async componentDidMount(){
        var response = await fetch('https://ajay-blog-backend.herokuapp.com/posts');
        var data = await response.json();
        var categories = ["all"];
        for(var i in data)
        {
            if(!categories.includes(data[i].category))
            {
                categories.push(data[i].category);
            }
        }
        var categories = categories.map(this.createCategories);
        var processedPosts = data.map(this.createPosts);
        this.setState({
            posts:data,
            processedPosts:processedPosts,
            categories:categories
        });        
    }

    

    render (){
        return (
            <div>
                <Container className="p-0" fluid>
                <Parallax  bgImage={blogImg} strength={500} >
                    <div  style={{ height:700,zIndex:0}}>
                    <div className="d-flex align-items-center pb-5 justify-content-center h-100" >
                            <div className="">
                            <h1 className="display-1 text-orange font-weight-bolder text-center font-Robo pr-3"> 
                                BLOG.
                             </h1>
                            </div>                            
                        </div>
                    </div>
                </Parallax> 
                </Container>
                <Container className="">
                    <Row>
                        <Col sm={12} md={10}>
                            <Title title="Take a Look"/>
                        </Col >
                        <Col sm={12} md={2}></Col>
                    </Row>
                    <Row className="d-flex">
                        <Col sm={12} md={10} className="pt-5">
                            <Row>
                            {this.state.processedPosts}
                            </Row>
                        </Col>
                        <Col sm={12} md={2} className="" >
                            <Container fluid className="pt-5 pb-5 border-left">
                                <h3 className="font-pomp text-left font-weight-bold text-shadow">CATEGORIES</h3>
                                
                                {this.state.categories}
                                
                            </Container>
                        </Col>    
                    </Row>                    
                </Container>
                
            </div>
        );
    }
}

export default Blog;