import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './searchBar.module.css'

function Search(props) {
  const [keyword, setKeyword] = useState('')
  const inputRef = useRef(null)
  const handleSummit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    setKeyword(keyword)
  }
  return (
    <>
      <nav className={styles.searchBar}>
        <Link to={`/`}>
          <div className={styles.logo}>
            <i class="fab fa-youtube"></i>
            <span className={styles.logo_title}>YouTube</span>
          </div>
        </Link>
        <form className={styles.search} onSubmit={handleSummit}>
          <Link to={`/`}>
            <input ref={inputRef} type="text" />
            <button>
              <i class="fas fa-search"></i>
            </button>
          </Link>
          <i class="fas fa-microphone"></i>
        </form>
        <div className={styles.acountAndEtc}>
          <i class="fas fa-bell"></i>
          <i class="fas fa-th"></i>
          <i class="fas fa-user-circle"></i>
        </div>
      </nav>
    </>
  )
}

export default Search
