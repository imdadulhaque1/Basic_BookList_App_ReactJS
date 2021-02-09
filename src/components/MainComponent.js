import React, { Component } from 'react';
import BookList from './lists/BookList';
import booksList from '../assets/books';

class MainComponent extends Component {
      constructor (props){
        super(props);
        this.state = {
          books: booksList ,
          showBooks: true
        }
        console.log("MainComponent Constructor");
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

    shouldComponentUpdate(nextProps, nextState){
      console.log("Updated MainComponent shouldComponentUpdate", nextProps, nextState);
      return true;
    }
  
    componentDidMount() {
      console.log("MainComponent componentDidMount !");
    }
  
    // UNSAFE_componentWillMount() {
    //   console.log("MainComponent componentWillMount !");
    // }
    // UNSAFE_componentWillUpdate(nextProps, nextState){
    //   console.log("Updated MainComponent componentWillUpdate !");
    // }

    static getDerivedStateFromProps(nextProps, prevState){
      console.log("MainComponent getDerivedStateFromProps", nextProps, prevState);
      return prevState;
    }
    getSnapshotBeforeUpdate(){        // We can use it exchange of "componentWillUpdate"
      console.log("Updated MainComponent getSnapshotBeforeUpdate");
    }
    render() {
      console.log("MainComponent Render");
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
  
      let books = null;
      if(this.state.showBooks){
        books = <BookList 
        books={this.state.books} 
        deleteBookState={this.deleteBookState} 
        changeWithInputState = {this.changeWithInputState}
        />
      }
      // console.log(books);
      return(
        <div className="App">
          <h1 style={style}>Book List</h1>
          <button onClick={this.toggleBooks}>Toggle Books</button>
          {books}
        </div>
      );
    }
}

export default MainComponent;