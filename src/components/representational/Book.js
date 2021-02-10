import React from 'react';
import '../../stylesheets/Book.css';
import {withRouter } from 'react-router-dom';

const Book = props =>{
    console.log(props);
    return(
        <div className="Book" onClick={props.selectedBookHandler}>
            <h3 >Book: {props.bookName}</h3>
            <h4>Author: {props.writer}</h4>
        </div>
    );
}

export default withRouter(Book);