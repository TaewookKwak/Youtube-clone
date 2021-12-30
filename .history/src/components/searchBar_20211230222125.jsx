import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './css/searchBar.module.css'

function Search(props) {
  let navigate = useNavigate()
  const [keyword, setKeyword] = useState()
  const inputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    setKeyword(inputRef.current.value)
    navigate('/result', { state: { word: '123' } })
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
        <form className={styles.search} onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder="Keyword.." />
          <button>
            <i class="fas fa-search"></i>
          </button>
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
