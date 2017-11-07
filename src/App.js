import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import Bookshelves from './components/Bookshelves';
import BookSearch from './components/Booksearch';
import BookSingle from './components/BookSingle';

class BooksApp extends React.Component {
  state = {
    books: [],
    queryBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ 
        books: books
      })
    })
  }

  bookUpdate = (bookDetails, newShelf) => {
    const index = this.state.books.findIndex(book => book.id === bookDetails.id)
    bookDetails.shelf = newShelf
    BooksAPI.update(bookDetails, newShelf).then((books) => {
      this.setState( (prevState) => ({
        books: index >= 0 ? [...prevState.books.slice(0, index), bookDetails, ...prevState.books.slice(index + 1)] : prevState.books.concat(bookDetails)
      }))
    })
  }

  bookSearch = (queryString, maxResults = 20) => {
    if (queryString === "") {
      this.setState({
        queryBooks: []
      })
    } else {  
      BooksAPI.search(queryString, maxResults).then((books) => {
      this.setState({
        queryBooks: books
        })
      })
    }
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <Bookshelves books={this.state.books} updateBook={this.bookUpdate} />
        )} />
        <Route path="/search" render={() => (
          <BookSearch queryBooks={this.state.queryBooks} books={this.state.books} bookSearch={this.bookSearch} updateBook={this.bookUpdate} />
        )} />
        <Route path="/books/:id" component={BookSingle} />
      </div>
    )
  }
}

export default BooksApp;