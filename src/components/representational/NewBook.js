import React, { Component, createRef } from 'react';

class NewBook extends Component{
    constructor(props){
        super(props);
        this.bookName = createRef();
        this.writer = createRef();
        this.description = createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event =>{
        console.log(this.bookName.current.value);
        console.log(this.writer.current.value);
        console.log(this.description.current.value);
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <h1>New Book Entry</h1>
                <form onSubmit={(event) =>this.handleSubmit(event)}>
                    <label>Book Name: </label> <br />
                    <input type="text" name="bookName" ref={this.bookName} /><br />
    
                    <label>Writer Name: </label><br />
                    <input type="text" name="writer" ref={this.writer} /><br />
    
                    <label>Description: </label><br />
                    <textarea name="description" ref={this.description} /><br />
    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default NewBook;