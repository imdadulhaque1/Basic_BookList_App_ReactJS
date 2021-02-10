import React from 'react';
import '../../stylesheets/Book.css';

const Book = props => {
    return (
        <div className="Book" onClick={props.selectedBookHandler}>
            <h3>Book: {props.bookName}</h3>
            <h4>Writer: {props.writer}</h4>
        </div>

    );
}

export default Book;