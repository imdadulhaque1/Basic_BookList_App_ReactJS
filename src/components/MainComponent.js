import React, { Component } from 'react';
import BookList from './lists/BookList';
import bookList from '../assets/books';
import NewBook from './representational/NewBook';
import BookDetail from './representational/BookDetail';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            selectedBook: null
        }
    }

    selectedBookHandler = bookId => {
        const book = this.state.books.filter(book =>
            book.id === bookId)[0];
        this.setState({
            selectedBook: book
        })
    }

    render() {

        const books = <BookList
            books={this.state.books}
            selectedBookHandler={this.selectedBookHandler}
        />

        return (
            <div className="App">
                <nav className="nav-bar">
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/books" exact render={() => books} />
                    <Route path="/new-book" exact component={NewBook} />
                    <Route path="/:id" render={()=> <BookDetail book={this.state.selectedBook} />} />
                </Switch>
                <Redirect from="/" to="/books" />
                
            </div>
        );
    }
}

export default MainComponent;