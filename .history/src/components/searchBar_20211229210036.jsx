import React from 'react'
import styles from './searchBar.module.css'

function Search(props) {
  return (
    <>
      <nav className={styles.searchBar}>
        <div className={styles.logo}>
          <i class="fab fa-youtube"></i>
          <span className={styles.logo_title}>YouTube</span>
        </div>
        <form className={styles.search}>
          <input type="text" />
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
