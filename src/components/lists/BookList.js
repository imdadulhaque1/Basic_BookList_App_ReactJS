import React, { Component } from 'react';
import Book from '../representational/Book';

class BookList extends Component {
    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        key={book.id}
                        selectedBookHandler={() => this.props.selectedBookHandler(book.id)}
                    />
                );
            })
        );
    }
}


export default BookList;