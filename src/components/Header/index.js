// Imports
import './style.scss';
import logo from '../../assets/images/zenika-blanc.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authentication';

// Composant
function Header() {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout())
    }
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="" className="header__image" />
            </Link>
            <h1 className="header__title">[ Zenika POC ]</h1>
            <button className="header__button" onClick={handleClick}>Logout</button>
        </header>
    )
};

// Export
export default Header;