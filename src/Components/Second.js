import React, { Component } from 'react'

export class Second extends Component {
    constructor(){
        super();
        this.state={
            message:"Welcome"
        }
    }
    render() {
        return (
            <div>
                {this.message}
            </div>
        )
    }
}

export default Second
