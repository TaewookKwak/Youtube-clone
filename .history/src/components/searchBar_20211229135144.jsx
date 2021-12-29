import React from 'react'

function Search(props) {
  return (
    <>
      <nav>
        <div className="logo">
          <i class="fab fa-youtube"></i>
          <span>YouTube</span>
        </div>
        <form className="search">
          <input type="text" />
          <button>
            <i class="fas fa-search"></i>
          </button>
          <i class="fas fa-microphone"></i>
        </form>
        <div className="acount&etc">
          <i class="fas fa-bell"></i>
          <i class="fas fa-th"></i>
          <i class="fas fa-user-circle"></i>
        </div>
      </nav>
    </>
  )
}

export default Search
