import './style.scss';
import logo from '../../assets/images/Vertical_White_Logo Zenika.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeRegisterField, register } from '../../actions/register';

function Register () {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleChange = (event) => {
        dispatch(changeRegisterField(event.target.value, event.target.name))
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.password === user.confirmPassword) {
            dispatch(register());
        } else {
            alert('les mots de passes ne sont pas identiques');
        }
        
    }
    return (
        <main className="container__register">
            <form className="formRegister" onSubmit={handleSubmit} >
                <img src={logo} alt="" className="formRegister__image" />
                <input onChange={handleChange} type="email" name="email" id="email" className="formRegister__input" placeholder="Email" value={user.email} />
                <input onChange={handleChange} type="password" name="password" id="password" className="formRegister__input" placeholder="Password" value={user.password} />
                <input onChange={handleChange} type="password" name="confirmPassword" id="consifrmPassword" className="formRegister__input" placeholder="Confirm Password" value={user.confirmPassword} />
                <button type="submit" className="formRegister__button">Register</button>
                <Link to={'/'}>back to login</Link>
            </form>
        </main>
    )
};

export default Register;