import React, { Component } from 'react';
import Book from '../representational/Book';

class BookList extends Component {
  constructor(props){
    super(props);
    console.log("BookList Constructor !")
  }
  UNSAFE_componentWillMount() {
    console.log("BookList componentWillMount !");
  }

  componentDidMount() {
    console.log("BookList componentDidMount !");
  }
  render() {
    console.log("BookList render !");
    return (
      this.props.books.map((book, index) => {
            return(
              <Book
                bookName ={book.bookName}
                writer = {book.writer}
                delete = {()=> this.props.deleteBookState(index)}
                key = {book.id}
                inputName = {(event)=> this.props.changeWithInputState(event, index)}
              />
            );
      })
    );
  }   
}

export default BookList;
