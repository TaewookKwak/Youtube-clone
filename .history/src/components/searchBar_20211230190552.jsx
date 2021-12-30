import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './css/searchBar.module.css'

function Search(props) {
  const [keyword, setKeyword] = useState()
  const inputRef = useRef('')
  const handleSummit = (e) => {
    e.preventDefault()
    console.log(inputRef)
    setKeyword(inputRef.current.value)
  }
  return (
    <>
      <nav className={styles.searchBar}>
        <Link to={`/home`}>
          <div className={styles.logo}>
            <i class="fab fa-youtube"></i>
            <span className={styles.logo_title}>YouTube</span>
          </div>
        </Link>
        <form className={styles.search} onSubmit={handleSummit}>
          <input ref={inputRef} type="text" />
          <Link to={`/result`} state={{ keyword: keyword }}>
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
