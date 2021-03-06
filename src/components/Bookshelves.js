import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookDisplayCard from './BookDisplayCard';


class Bookshelves extends Component {
  render() {
    const { books } = this.props;

    // Filtering out the books belonging on each shelf so those lists of books can be sent to the BookDisplayCard component and displayed on their corresponding shelf.
    const currentlyReadingShelf = books.filter((book) => {
      return book.shelf === "currentlyReading";
    })
    const wantToReadShelf = books.filter((book) => {
      return book.shelf === "wantToRead";
    })
    const readShelf = books.filter((book) => {
      return book.shelf === "read";
    })
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Library</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReadingShelf && currentlyReadingShelf.map((book) => <BookDisplayCard key={book.id} book={book} updateBook={this.props.updateBook} />) }
                </ol>
              </div>
            </div>
          </div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want To Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToReadShelf && wantToReadShelf.map((book) => <BookDisplayCard key={book.id} book={book} updateBook={this.props.updateBook} />) }
                </ol>
              </div>
            </div>
          </div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {readShelf && readShelf.map((book) => <BookDisplayCard key={book.id} book={book} updateBook={this.props.updateBook} />) }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Bookshelves;