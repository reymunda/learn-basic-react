import React,{Component} from 'react';
import Post from './Post';
import axios from 'axios';
class BlogPost extends Component{
    constructor(props){
        super(props)
        this.state = {
            post : []
        }
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    post : res.data
                })
            })
    }
    render(){
        return(
            <>
                <h1>Blog Post</h1>
                <hr/>
                {
                    this.state.post.map(data => {
                        return <Post title={data.title} body={data.body}/>
                    })
                }
            </>
        )
    }
}

export default BlogPost