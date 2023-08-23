import React, { Component, useEffect, useState } from 'react';
import Img_class from './Img_class';


export class Main_class extends Component {
   constructor() {
      super();
      this.state = {
         nothidden: false
      };
   }

   componentDidUpdate() {
      console.log('did update');
   }

   render() {
      return (
         <div className='container'>
            <button onClick={() => this.setState({ nothidden: true })}>Show</button>
            <button onClick={() => this.setState({ nothidden: false })}>Hide</button>
            <button onClick={() => this.setState({ nothidden: !this.state.nothidden })}>Hide/show</button>

            {
               this.state.nothidden ? <Img_class /> : null
            }
         </div>
      );
   }

}

export default Main_class;