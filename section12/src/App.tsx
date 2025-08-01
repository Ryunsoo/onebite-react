import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import Header from './components/layout/Header'
import Button from './components/common/Button'

// 1. "/" : 모든 일기 조회 (HOME)
// 2. "/new" : 새 일기 작성 (NEW)
// 3. "/diary" : 일기 상세 조회 (Diary)
function App() {
  return (
    <>
      <Header title="Header"
        leftChild={<Button text='Left' onClick={() => { }} />}
        rightChild={<Button text='Right' onClick={() => { }} />} />

      <Button text="123" onClick={() => {
        console.log("123 버튼");
      }} />
      <Button text="123" type="positive" onClick={() => {
        console.log("123 버튼");
      }} />
      <Button text="123" type="negative" onClick={() => {
        console.log("123 버튼");
      }} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
