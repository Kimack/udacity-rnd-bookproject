import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookDisplayCard extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.props.updateBook(this.props.book, e.target.value);
  }

  render() {
    const { book } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <Link to={`books/${book.id}`} >
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div></Link>
                <div className="book-shelf-changer">
                  <select value={book.shelf ? book.shelf : "none"} onChange={this.handleChange}>
                    <option disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">by: {book.authors && book.authors.join(", ")}</div>
        </div>
      </li>
    )
  }  
}

export default BookDisplayCard;