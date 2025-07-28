import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    // useNavigate : 라우트 이동 함수 제공
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/new');
    }

    // <Link> 태그 사용 : CSR 유지 (<a> 태그 사용 X)
    return <header>
        <h1>
            <Link to="/">감정 일기장</Link>
        </h1>
        <div>
            <Link to="/new">New</Link>
            <Link to="/diary">Diary</Link>
        </div>
        <button onClick={handleClickButton}>New 페이지 이동</button>
    </header>
}

export default Header;