import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AddedCard from './components/AddedCard';



function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('')
  const [addedBook, setAddedBook] = useState('')
  const [visible, setVisible] = useState(10)
  const [text, setText] = useState('Load more')
  const [btnClass, setBtnClass] = useState('but-close')
 
 
  
  const handleClick = async() => {

   await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAwPx0i8ndzGxB5iqI-v7iOwFvlDosQMqE&maxResults=30`).then(response => {
    setBooks(response.data.items)
     })

    setVisible(10)
    setBtnClass('btn btn-light')
  }
  

  const handleChange = (event) => {
    event.preventDefault()
    setQuery(event.target.value);
  }
  const handleAddClick = (book) => {
    if (book) {
     setAddedBook(book)
    } else {
      setAddedBook('')
    }
    
  }
  
  const relevaceClick = async() => {
    await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}=relevance&key=AIzaSyAwPx0i8ndzGxB5iqI-v7iOwFvlDosQMqE&maxResults=30`).then(response => {
     if(response.data.items) {
        setBooks(response.data.items)
     } else {
       setBooks([])
       setText('No results')
     }
      })
  }
  const newestClick = async() => {
    await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}=newest&key=AIzaSyAwPx0i8ndzGxB5iqI-v7iOwFvlDosQMqE&maxResults=30`).then(response => {
      if(response.data.items) {
        setBooks(response.data.items)
     } else {
       setBooks([])
       setText('No results')
     }
     })
     
     
  }
  const showMoreItem = () => {
    
    if (visible < books.length) {
      setVisible((prevValue) => prevValue + 10)  
    } else {
  
      setText('No more results')
      setBooks([])
    }
  }
  return (
    <BrowserRouter>
   <div className='app'>
     <Header newestClick={newestClick} relevaceClick={relevaceClick} handleClick={handleClick} handleChange={handleChange} query={query}/>
     <Switch>
       <Route exact path='/'>
     <CardList btnClass={btnClass} text={text} showMoreItem={showMoreItem} visible={visible} handleAddClick={handleAddClick} books={books} />
     </Route>
     <Route exact path='/addedCart'>
       <AddedCard books={addedBook} />
     </Route>
     </Switch>
   </div>
   </BrowserRouter>
  );
}

export default App;
