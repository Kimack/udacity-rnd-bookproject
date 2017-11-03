import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Bookshelves from './Bookshelves'
import BookSearch from './Booksearch'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [],
    queryBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books})
    })
  }

  bookUpdate = (bookDetails, newShelf) => {
    BooksAPI.update(bookDetails, newShelf).then( books => {
      // this.setState({
      //   shelves: books
      // })
      debugger
    })
  }

  bookSearch = (queryString, maxResults = 20) => {
    BooksAPI.search(queryString, maxResults).then((books) => {
      this.setState({
        queryBooks: books
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <Bookshelves books={this.state.books} shelves={this.state.shelves} updateBook={this.bookUpdate} />
        )} />
        <Route path="/search" render={() => (
          <BookSearch books={this.state.queryBooks} bookSearch={this.bookSearch} updateBook={this.bookUpdate} />
        )} />
      </div>
    )
  }
}

export default BooksApp