import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Bookshelves from './Bookshelves'
import BookSearch from './Booksearch'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <Bookshelves books={this.state.books} />
        )} />
        <Route path="/search" component={BookSearch} />
      </div>
    )
  }
}

export default BooksApp