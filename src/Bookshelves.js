import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const BookList = ({book}) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              
              {book.shelf === "currentlyReading" ? <option value="currentlyReading" selected>Currently Reading</option> : <option value="currentlyReading">Currently Reading</option> }
              
              {book.shelf === "wantToRead" ? <option value="wantToRead" selected>Want to Read</option> : <option value="wantToRead">Want to Read</option>}
              
              {book.shelf === "read" ? <option value="read" selected>Read</option> : <option value="read">Read</option>}
              
              {!book.shelf ? <option value="none" selected>None</option> : <option value="none">None</option>}
            
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    </li>
  )  
}

class Bookshelves extends Component {
  render() {
    const { books } = this.props

    let currentlyReadingShelf = books.filter((book) => {
      return book.shelf === "currentlyReading"
    })
    let wantToReadShelf = books.filter((book) => {
      return book.shelf === "wantToRead"
    })
    let readShelf = books.filter((book) => {
      return book.shelf === "read"
    })
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Books</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReadingShelf && currentlyReadingShelf.map((book) => <BookList key={book.id} book={book} />) }
                </ol>
              </div>
            </div>
          </div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want To Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToReadShelf && wantToReadShelf.map((book) => <BookList key={book.id} book={book} />) }
                </ol>
              </div>
            </div>
          </div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {readShelf && readShelf.map((book) => <BookList key={book.id} book={book} />) }
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

export default Bookshelves