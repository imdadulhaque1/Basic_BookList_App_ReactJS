import React, { Component } from 'react';
import BookList from './lists/BookList';
import booksList from '../assets/books';
import NewBook from './representational/NewBook';
import { Route, NavLink } from 'react-router-dom';

class MainComponent extends Component {
      constructor (props){
        super(props);
        this.state = {
          books: booksList ,
          showBooks: true
        }
      }
  
    changeWithInputState = (event, index) =>{
      const book = {
        ...this.state.books[index]
      }
  
      book.bookName = event.target.value;
      const books = [...this.state.books];
      books[index]=book;
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

    render() {
        const books = <BookList 
        books={this.state.books} 
        deleteBookState={this.deleteBookState} 
        changeWithInputState = {this.changeWithInputState}
        />

      return(
        <div className="App">
          <nav className="nav-bar">
            <ul>
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/new-book">New Book</NavLink></li>
            </ul>
          </nav>
          <Route path="/" exact render={()=> books} />
          <Route path="/new-book" exact component={NewBook} />
        </div>
      );
    }
}

export default MainComponent;