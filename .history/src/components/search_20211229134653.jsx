import React from 'react'

function Search(props) {
  return (
    <>
      <nav>
        <div className="logo">
          <i class="fab fa-youtube"></i>
          <span>YouTube</span>
        </div>
        <form>
          <input type="text">
            <i class="fas fa-times"></i>
          </input>
          <button>
            <i class="fas fa-search"></i>
          </button>
        </form>
      </nav>
    </>
  )
}

export default Search
