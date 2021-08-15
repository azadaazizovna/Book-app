import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Card = ({book, handleAddClick}) => {
    return (
    
<div className="card">
      <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt="book" />
      <div className="card-body">
        <h5 className="card-title"> {book.volumeInfo.title} </h5>
        <p className="card-text"> {book.volumeInfo.authors} </p>
        <Link to='/addedCart'>
        <button 
          onClick={() => handleAddClick(book)}
          className='btn btn-light'>View more</button>
        </Link>
      </div>
</div>

    )
}

export default Card
