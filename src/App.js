import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

// ctrl + k + c => Comment
// ctrl + k + u => Uncomment
// Class Components
class App extends Component{
  // State
  state = {
    books: [
      {bookName: "1984", writer: "George Orwell"},
      {bookName: "The Da Vinci Code", writer: "Dan Brown"},
      {bookName: "The Alchemist", writer: "Paulo Coelho"}
    ],
    otherProp: "I am from other Props !"
  }
  // constructor(){
  //   super();
  //   this.state = {};
  // }
  changeBookState = newBookName =>{
    // Wrong: this.state.books[0].bookName="1997";
    this.setState({
      books: [
        {bookName: newBookName, writer: "Imdadul Haque"},
        {bookName: "The of Story", writer: "Israt Jahan Maisha"},
        {bookName: "Unknown Book", writer: "Enamul Haque"}
      ]
    });
  }

  changeWithInputState = event =>{
    this.setState({
      books: [
        {bookName: event.target.value, writer: "Imdadul Haque"},
        {bookName: "The of Story", writer: "Israt Jahan Maisha"},
        {bookName: "Unknown Book", writer: "Enamul Haque"}
      ]
    });
  }
  render() {
    // let obj = new Component();
    // console.log(obj);
    // For Book 
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    };
    return(
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={()=>this.changeBookState("1440")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState}
        inputName = {this.changeWithInputState } />
        <Book 
              bookName={this.state.books[0].bookName}
              writer={this.state.books[0].writer}/>
        <Book
              bookName={this.state.books[1].bookName}
              writer={this.state.books[1].writer}/>
        <Book
              bookName={this.state.books[2].bookName}
              writer={this.state.books[2].writer}
              change={this.changeBookState.bind(this, "ID: 1440")}/>
      </div>
    );
  }
}

export default App;
