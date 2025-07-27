import { useRef, useState } from "react";

// component 외부에 선언된 변수는 컴포넌트 함수 외부이기 때문에 리렌더링 범위에 속하지 않는다.
// 동일한 컴포넌트를 다른 곳에서 사용하더라도 스크립트는 유지되기 때문에 변수가 공유됨.
// 사용이 권장되지 않음 

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    // 1. 값이 변경되어도 화면이 리렌더링되지 않음
    // 2. 요소 조작을 위해 사용할 수 있음
    // 3. ref 변수는 current로 접근
    const counstRef = useRef(0);
    const inputRef = useRef();

    const handleChange = (e) => {
        counstRef.current++;
        console.log(counstRef.current);

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        if (input.name === "") {
            console.log(inputRef.current);
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={handleChange}
                    placeholder="이름" />
            </div>

            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={handleChange}
                    type="date" />
            </div>

            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={handleChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={handleChange}
                    placeholder="자기소개" />
            </div>

            <button onClick={handleSubmit}>제출</button>
        </div>
    )
}

export default Register;