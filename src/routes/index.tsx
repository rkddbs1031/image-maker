import { Routes, Route } from 'react-router-dom'

import Main from './Main'
import styles from './routes.module.scss'

const App = () => {
  return (
    <main className={styles.container}>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </main>
  )
}
export default App
