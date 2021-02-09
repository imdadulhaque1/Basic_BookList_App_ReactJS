import React, { Component } from 'react';
import Book from '../representational/Book';

class BookList extends Component {
  constructor(props){
    super(props);
    console.log("BookList Constructor !")
  }

  componentDidMount() {
    console.log("BookList componentDidMount !");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Updated BookList shouldComponentupdate", nextProps, nextState);
    return true;
  }
  
  componentDidUpdate(){
    console.log("Updated BookList componentDidUpdate");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("BookList componentWillMount !");
  // }
  // UNSAFE_componentWillReceiveProps(nextProps){
  //   console.log("Updated BookList componentWillReceiveProps",nextProps);
  // }
  // UNSAFE_componentWillUpdate(nextProps, nextState){
  //   console.log("Updated componentWillUpdate");
  // }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("BookList getDerivedStateFromProps", nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate(){       // We can use it exchange of "componentWillUpdate"
    console.log("Updated BookList getSnapshotBeforeUpdate");
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
