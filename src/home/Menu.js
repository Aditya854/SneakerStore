import React from 'react'
// import SearchIcon from './Search'

function Menu() {
    return (
        <div className='menu'>
          {/* <div className='menu1'>
            <h3>Men's</h3>
            <p>Shop now</p>
          </div>

          <div className='menu2'>
            <h3>Women's</h3>
            <p>Shop now</p>
          </div>

          <div className='menu3'>
            <h3>Trend</h3>
            <p>Shop now</p>
          </div> */}

<div className="header_search">
        <input className="header_searchInput" type="text" />
        <i class="fas fa-search fa-2x"></i>
        {/* <SearchIcon className="header_searchIcon" /> */}
      </div>

        </div>
    )
}

export default Menu
