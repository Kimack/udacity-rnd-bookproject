import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { get } from '../utils/BooksAPI'

class BookSingle extends Component {
  state = {
    book: {}
  }

  componentDidMount() {
    get(this.props.match.params.id).then((book) => {
      this.setState({
        book: book
      })
    })
  }

  onClickBackButton = () => {
    this.props.history.goBack();
  }

  render() {
    if (this.state.book) {
      return (
        <div className="list-book">
          <div className="list-books-title">
            <h1 className="big-book-title">{this.state.book.title && this.state.book.title}</h1>
            <h2 className="book-subtitle">{this.state.book.subtitle && this.state.book.subtitle}</h2>
          </div>
          <div className="list-books-content">
          <Link className="single-book-close" to="#" onClick={this.onClickBackButton} >Close</Link>
            <div>
            <div className="single-book">
          <div className="single-top">
            {/* <div className="book-cover" style={{ width: 199, height: 300, backgroundImage: `url(${this.state.book.imageLinks && this.state.book.imageLinks.thumbnail})` }}></div> */}
            <img src={`${this.state.book.imageLinks && this.state.book.imageLinks.thumbnail}`} alt="book cover" className="cover-photo" />
          </div>
          <div className="single-book-authors">{this.state.book.authors && `by: ` + this.state.book.authors.join(", ")}</div>
          <div className="single-book-description">About this book: <br/><br/>{this.state.book.description && this.state.book.description}</div> 
        </div>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default BookSingle