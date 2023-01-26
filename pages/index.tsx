import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading} >Explore the world library recipes</h1>
        <button className={styles.button} >EXPLORE</button>
      </div>
    </div>
  )
}

export default Home
