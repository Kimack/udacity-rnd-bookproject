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

    for (let i = 0; i < queryBooks.length; i++) {
      for (let j = 0; j < books.length; j++) {
        if (queryBooks[i].id === books[j].id) {
          queryBooks[i].shelf = books[j].shelf;
        }
      }
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