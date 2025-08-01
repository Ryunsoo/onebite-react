import './Header.css'
import { Link, useNavigate } from 'react-router-dom'

const Header: React.FC<{ title: string, leftChild: React.ReactNode, rightChild: React.ReactNode }> =
    ({ title, leftChild, rightChild }) => {
        // useNavigate : 라우트 이동 함수 제공
        const navigate = useNavigate();

        const handleClickButton = () => {
            navigate('/new');
        }

        return (
            <header className="Header">
                <div className="header_left">{leftChild}</div>
                <div className="header_center">{title}</div>
                <div className="header_right">{rightChild}</div>
            </header>
        )
        // <Link> 태그 사용 : CSR 유지 (<a> 태그 사용 X)
        // return <header>
        //     <h1>
        //         <Link to="/">감정 일기장</Link>
        //     </h1>
        //     <div>
        //         <Link to="/new">New</Link>
        //         <Link to="/diary">Diary</Link>
        //     </div>
        //     <button onClick={handleClickButton}>New 페이지 이동</button>
        // </header>
    }

export default Header;