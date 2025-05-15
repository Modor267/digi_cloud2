
import { Outlet } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <main className='app'>
      <ScrollToTop />
      <Outlet />
    </main>
  )
}

export default App
