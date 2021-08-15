import React from 'react'
import '../App.css'
import { Dropdown } from 'react-bootstrap'

const Header = ({query, handleChange, handleClick, relevaceClick, newestClick}) => {
    return (
        <div className='header'>
            <div className='search'>
         <div className="input-group rounded">
          <input onChange={handleChange}
                 value={query}
                 type="search"
                 className="form-control rounded" 
                 placeholder="Search book..."
                  />
        <button   onClick={handleClick}
                  className="btn btn-light">
            <i className="fa fa-search"></i>
           </button>
          </div>
          </div>
          <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Sorting by 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={relevaceClick}>Relevance</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={newestClick}>Newest</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </div>
    )
}

export default Header
