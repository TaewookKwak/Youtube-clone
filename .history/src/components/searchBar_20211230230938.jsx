import React, { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './css/searchBar.module.css'

function Search(props) {
  let navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/result`, { state: { keyword: inputRef.current.value } })
    setInputValue('')
  }
  const handleUserInput = (e) => {
    setInputValue(e.target.value)
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
          <input
            ref={inputRef}
            type="text"
            placeholder="Keyword.."
            value={inputValue}
            onChange={handleUserInput}
          />
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
