import React, { Component } from 'react';
import BookList from './lists/BookList';
import booksList from '../assets/books';
import NewBook from './representational/NewBook';
import { Route, NavLink } from 'react-router-dom';
import BookDetail from './representational/BookDetail';


class MainComponent extends Component {
      constructor (props){
        super(props);
        this.state = {
          books: booksList,
          selectedBook: null
        }
      }

      selectedBookHandler = bookId =>{
        const book= this.state.books.filter(book => book.id === bookId)[0];
        this.setState({
          selectedBook: book
        })
      }

    render() {
        const books = <BookList 
        books={this.state.books} 
        selectedBookHandler = {this.selectedBookHandler}
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
          <BookDetail book={this.state.selectedBook} />
        </div>
      );
    }
}

export default MainComponent;