import React, { Component } from 'react';
import Img from './Img';

export class Class_state extends Component {

   constructor() {
      super();
      this.state = {
         name: "naim",
         username: "naim619",
         age: 19,
         number: 1,
         isImage: true

      };

   }
   render() {

      return (
         <div>
            <button onClick={() => this.setState({ name: "nayeeem" })}>Change</button>
            <h1>{this.state.name}</h1>

            <button onClick={() => this.setState({ username: "multinaim", age: 2 })}>change</button>
            <h1>my name is {this.state.username} and my age is {this.state.age}</h1>


            <button onClick={() => this.setState({ isImage: false })}>hide</button>
            <button onClick={() => this.setState({ isImage: true })}>show</button>
            <button onClick={() => this.setState({ isImage: !this.state.isImage })}>hide/show</button>

            {
               this.state.isImage ? <Img /> : null
            }











         </div>
      );
   }
}

export default Class_state;