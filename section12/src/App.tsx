import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import Header from './components/layout/Header'

// 1. "/" : 모든 일기 조회 (HOME)
// 2. "/new" : 새 일기 작성 (NEW)
// 3. "/diary" : 일기 상세 조회 (Diary)
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
