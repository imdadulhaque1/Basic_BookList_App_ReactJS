import React, { Component } from 'react';
import Book from '../representational/Book';
import {withRouter } from 'react-router-dom';

class BookList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    // console.log("BookList render !");
    return (
      this.props.books.map((book, index) => {
            return(
              <Book
                bookName ={book.bookName}
                writer = {book.writer}
                key = {book.id}
                selectedBookHandler={()=>this.props.selectedBookHandler(book.id)}
              />
            );
      })
    );
  }   
}

export default withRouter(BookList);
