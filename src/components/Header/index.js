// Imports
import './style.scss';
import logo from '../../assets/images/zenika-blanc.png';

// Composant
function Header() {
    return (
        <header className="header">
            <a href="./index.html">
                <img src={logo} alt="" className="header__image" />
            </a>
            <h1 className="header__title">[ Zenika POC ]</h1>
            <a href="./connexion.html"><button className="header__button">Logout</button></a>
        </header>
    )
};

// Export
export default Header;