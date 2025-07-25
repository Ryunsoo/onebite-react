import "./App.css"
// 확장자 생략 가능 >> vite 지원
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Button from "./components/Button"

// 대문자로 시작하지 않으면 컴포넌트로 인식하지 않음
function App() {
  return (
    <>
      <Button text="메일" color="red" />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  )
}

export default App
