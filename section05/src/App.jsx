import "./App.css"
import HookExam from "./components/HookExam"
// 확장자 생략 가능 >> vite 지원
// import Header from "./components/Header"
// import Bulb from "./components/Bulb"
// import Counter from "./components/Counter"
// import Register from "./components/Register"

// 대문자로 시작하지 않으면 컴포넌트로 인식하지 않음
// function App() {
// props로 html element 나 component도 전달 가능
// const buttonProps = {
//   text: "메일",
//   color: "red",
//   a: 1,
//   b: 2,
// }

// return (
//   <>
//     <Button {...buttonProps} />
//     <Button text={"카페"} />
//     <Button text={"블로그"} >
//       {/* 자식의 자식 컴포넌트를 정의하면 자식 컴포넌트에 'children' 프로퍼티가 자동으로 전달됨 */}
//       <div>
//         자식 요소
//       </div>
//       <Header />
//     </Button>
//   </>
// )
// }



// 컴포넌트의 상태값(state)가 변경되면 요소를 다시 return하여 화면 또한 재렌더링 됨
// function App() {
// 서로 다른 state를 관리하는 요소는 별도의 Component로 분리/관리 (불필요한 리렌더링 방지)

// 컴포넌트가 리렌더링되는 조건
// 1. state 변경
// 2. props 변경
// 3. 부모 컴포넌트 리렌더링
// return (
//     <>
//       <Bulb />
//       <Counter />
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <Register />
//     </>
//   )
// }

function App() {
  return (
    <>
      <HookExam />
    </>
  )
}

export default App
