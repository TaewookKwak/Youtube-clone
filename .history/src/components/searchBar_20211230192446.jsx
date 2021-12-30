import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './css/searchBar.module.css'

function Search(props) {
  const [keyword, setKeyword] = useState()
  const inputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
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
        <Link to={`/home`}>
          <form className={styles.search} onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Keyword.." />
            <button>
              <i class="fas fa-search"></i>
            </button>
            <i class="fas fa-microphone"></i>
          </form>
        </Link>
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
