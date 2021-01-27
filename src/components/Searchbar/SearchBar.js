import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import searchbar from './searchbar.css'

const searchIconStyle = {
  fontSize: '26px',
  margin: ' auto',
  color: '#808080'
}

export function SearchBar() {
  return (
    <div className={`header_searchIcon`}>
      <select className='select_search'>
        <option>All</option>
      </select>
      <input type='text' className='header_searchInput' />
      <SearchIcon className={searchbar.header_searchIcon} />
    </div>
  )
}
