// Imports
import './style.scss';
import logo from '../../assets/images/Vertical_White_Logo Zenika.png';
import { useDispatch } from 'react-redux';
import { changeRedirection } from '../../actions/authentication';
import { GoogleLogin } from '@react-oauth/google';


// Composant
function Connexion() {
    const dispatch = useDispatch();

    return (
        <main className="container__connexion">
            <div className="connexion" >
                <h1 className="connexion__title">[ Zuivi ]</h1>   
                <img src={logo} alt="" className="connexion__image" />

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        sessionStorage.setItem('JWT-Access-Token', credentialResponse.credential);
                        sessionStorage.setItem('isLogged', true);
                        dispatch(changeRedirection('/overview'));
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </main>
    )
};

// Export
export default Connexion;