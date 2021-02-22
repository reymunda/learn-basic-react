import React from 'react';

class LifeCycleComp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
        console.log('Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({
                count : this.state.count + 1
            })
        },3000)
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('shouldComponentUpdate')
    // }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate')
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){

    }
    render(){
        console.log('render')
        return(
            <h1>{this.state.count}</h1>
        )
    }
}

export default LifeCycleComp