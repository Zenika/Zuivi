// Imports
import './style.scss';
import logo from '../../assets/images/zenika-blanc.png';
import { Link } from 'react-router-dom';

// Composant
function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="" className="header__image" />
            </Link>
            <h1 className="header__title">[ Zenika POC ]</h1>
            <Link to="/connexion"><button className="header__button">Logout</button></Link>
        </header>
    )
};

// Export
export default Header;