import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        Hi Vivian, you have 0 job applications so far. Add a new one?
      </div>
    </main>
  )
}
