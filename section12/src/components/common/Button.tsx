import './Button.css';

const Button: React.FC<{ text: string, type?: string, onClick: () => void }>
    = ({ text, type = 'default', onClick }) => {
        return <button className={`Button Button_${type}`} onClick={onClick}>
            {text}
        </button>
    }

export default Button;