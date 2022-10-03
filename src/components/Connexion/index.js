// Imports
import './style.scss';
import logo from '../../assets/images/Vertical_White_Logo Zenika.png';
import { Link } from 'react-router-dom';


// Composant
function Connexion() {
    return (
        <main className="container__connexion">
            <div className="formConnexion">
                <img src={logo} alt="" className="formConnexion__image" />
                <input type="email" name="email" id="" className="formConnexion__input" placeholder="Email" />
                <input type="password" name="password" id="" className="formConnexion__input" placeholder="Password" />
                <Link to="/"><button type="" className="formConnexion__button">Login</button></Link>
            </div>
        </main>
    )
};

// Export
export default Connexion;