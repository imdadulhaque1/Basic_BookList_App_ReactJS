import React, { Component } from 'react';

//   let Person = (props) =>{
//     return(
//         <div>
//               <h3>Name: {props.name}</h3>
//               <h4>Age: {props.age}</h4>
//               <p>Details in: {props.children}</p>

//         </div>
//       );
//   }
  class Person extends Component{
     constructor(props) {
         super(props);
     }
     render() {
        //  console.log(this.props);
        return(
            <div>
                <h3>Name: {this.props.name}</h3>
                <h4>Age: {this.props.age}</h4>
                <p>Details in: {this.props.children}</p>
            </div>
        );
     }
  }

  export default Person;