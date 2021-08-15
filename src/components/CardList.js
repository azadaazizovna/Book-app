import React from 'react'
import Card from './Card'
import '../App.css'

const CardList = ({books, handleAddClick, visible,showMoreItem, text, btnClass}) => {
    return (
        <div className='mainList'>
        <div className='cardList'>
           {books.slice(0, visible).map((book) => (
            <Card key={books.id} handleAddClick={handleAddClick} book={book}/>
           ))}
        </div>
        <button
         onClick={showMoreItem}
         className={btnClass}>{text}</button>
        </div>
    )
}

export default CardList
