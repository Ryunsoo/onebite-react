// 이벤트 핸들러 함수명은 'handle' + 이벤트명으로 사용하는 것이 관례
const handleClick = (e, text) => {
    console.log(e, text);
}

// react 18v 까지는 'Component'.defaultProps = '' 의 기능이 제공되었었음
const Button = ({ text, color = "blue", children }) => {
    return (
        <button onClick={(e) => handleClick(e, text)}
            style={{ color }}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    )
}

export default Button;
