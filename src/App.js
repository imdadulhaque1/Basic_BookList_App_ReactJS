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
      {id:1, bookName: "1984", writer: "George Orwell"},
      {id:2, bookName: "The Da Vinci Code", writer: "Dan Brown"},
      {id:3, bookName: "The Alchemist", writer: "Paulo Coelho"}
    ],
    // otherProp: "I am from other Props !"
    showBooks: true
  }

  changeWithInputState = (event, index) =>{
    const book = {
      ...this.state.books[index]
    }

    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index]=book;

    this.setState({ books: books });
  }

  deleteBookState = index =>{
    // const books = this.state.books.slice();     // use Spread Operator
    // const books = this.state.books.map(item => item);    // use Spread Operator 
    const books = [...this.state.books];  //Spread Operator is best way to use
    books.splice(index, 1);
    this.setState({
      books: books
    });
  };

  toggleBooks = () =>{
    this.setState({ showBooks: !this.state.showBooks });
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

    // const booksState = this.state.books;
 
    const books = this.state.books.map((book, index) => {
      return(
        <Book
          bookName ={book.bookName}
          writer = {book.writer}
          delete = {()=> this.deleteBookState(index)}
          key = {book.id}
          inputName = {(event)=> this.changeWithInputState(event, index)}
        />
      );
    });
    console.log(books);


    return(
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        {this.state.showBooks ? books : null}
      </div>
    );
  }
}

export default App;
