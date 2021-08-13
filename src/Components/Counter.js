import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
}
   
    increase(){
        this.setState({count:this.state.count+1})
        console.log(this.state.count);
    }
    render() {
        return (
            <div>
                Count {this.state.count}
                <button onClick={()=>this.increase()}>Increase</button>
                
            </div>
        )
    }
}

export default Counter
