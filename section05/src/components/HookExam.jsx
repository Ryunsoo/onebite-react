import useInput from "../hooks/useInput";

// Hook
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부(조건문 / 반복문)로 호출될 수 없다.
// 3. 나만의 훅 (Custom Hook) 직접 만들 수 있다.

const HookExam = () => {
    const [input, handleChange] = useInput("Hello");
    const [input2, handleChange2] = useInput("World");

    return (
        <div>
            <input value={input} onChange={handleChange} />
            <input value={input2} onChange={handleChange2} />
        </div>
    )
}

export default HookExam;