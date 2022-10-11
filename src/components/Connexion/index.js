// Imports
import './style.scss';
import logo from '../../assets/images/Vertical_White_Logo Zenika.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginField, logIn } from '../../actions/authentication';


// Composant
function Connexion() {
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.user);

    const handleChange = (event) => {
        dispatch(changeLoginField(event.target.value, event.target.name))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(logIn());
    }
    return (
        <main className="container__connexion">
            <form className="formConnexion" onSubmit={handleSubmit} >
                <img src={logo} alt="" className="formConnexion__image" />
                <input onChange={handleChange} type="email" name="email" id="email" className="formConnexion__input" placeholder="Email" value={user.email} />
                <input onChange={handleChange} type="password" name="password" id="password" className="formConnexion__input" placeholder="Password" value={user.password} />
                <button type="submit" className="formConnexion__button">Login</button>
            </form>
        </main>
    )
};

// Export
export default Connexion;