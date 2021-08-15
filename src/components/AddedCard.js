import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const AddedCard = ({books}) => {
    return (
       <div className='container addedCard'>
           <img src={books.volumeInfo.imageLinks.thumbnail} className="img-fluid rounded-start" alt="/"></img>
          <div className='card-body'>
          <h3 className='card-title'>{books.volumeInfo.title}</h3>
          <h5 className='card-title'>{books.volumeInfo.authors}</h5>
          <p className='card-text p'> {books.volumeInfo.categories} </p>
          <p className='card-text'>{books.volumeInfo.description}</p>
         <Link to='/'>
          <button className='btn btn-light'>Back</button>
          </Link>
          </div>
       </div>
    )
}

export default AddedCard


