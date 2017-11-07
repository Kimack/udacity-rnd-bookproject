import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BookDisplayCard from './BookDisplayCard'

class BookSearch extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    e.preventDefault()
    this.props.bookSearch(e.target.value)
  }
  
  render() {
    const { books, queryBooks } = this.props

    // Loop through search results and if the book matches one already on a shelf, update the status of that book's shelf to match.
    for (let i = 0; i < queryBooks.length; i++) {
      const book = books.filter( (book) => book.id === queryBooks[i].id )
      book.length > 0 && (queryBooks[i].shelf = book[0].shelf)
    }

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {queryBooks.error ? <div className="searchError"><h3>No books returned for this search.  Please try again.</h3></div> : queryBooks.map((book) => <BookDisplayCard key={book.id} book={book} updateBook={this.props.updateBook} />) }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch