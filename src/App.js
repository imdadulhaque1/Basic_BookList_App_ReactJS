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
    // otherProp: "I am from other Props !"
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

  deleteBookState = index =>{
    const books = this.state.books;
    books.splice(index, 1);
    this.setState({
      books: books
    });
  };
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

    // const booksState = this.state.books;
 
    const books = this.state.books.map((book, index) => {
      return(
        <Book
          bookName ={book.bookName}
          writer = {book.writer}
          delete = {() => this.deleteBookState(index)}
        />
      );
    });
    console.log(books);


    return(
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={()=>this.changeBookState("1440")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState}
        inputName = {this.changeWithInputState } />
        {books}
      </div>
    );
  }
}

export default App;
