import './style.scss';
import logo from '../../assets/images/Vertical_White_Logo Zenika.png';
import { Link } from 'react-router-dom';

function Register () {
    const handleChange = () => {

    };
    const handleSubmit = () => {

    }
    return (
        <main className="container__register">
            <form className="formRegister" onSubmit={handleSubmit} >
                <img src={logo} alt="" className="formRegister__image" />
                <input onChange={handleChange} type="email" name="email" id="email" className="formRegister__input" placeholder="Email" />
                <input onChange={handleChange} type="password" name="password" id="password" className="formRegister__input" placeholder="Password" />
                <input onChange={handleChange} type="password" name="confirmPassword" id="consifrmPassword" className="formRegister__input" placeholder="Confirm Password" />
                <button type="submit" className="formRegister__button">Register</button>
                <Link to={'/'}>back to login</Link>
            </form>
        </main>
    )
};

export default Register;