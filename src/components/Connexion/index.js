// Imports
import './style.scss';
import logo from '../../assets/images/Vertical_White_Logo Zenika.png';
import { useDispatch } from 'react-redux';
import { changeRedirection, logIn } from '../../actions/authentication';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';


// Composant
function Connexion() {
    const dispatch = useDispatch();

    // const login = useGoogleLogin({
    //     onSuccess: credentialResponse => dispatch(logIn(credentialResponse)),
    //     onError: console.log('Login Failed'),
    //   });

    return (
        <main className="container__connexion">
            <div className="connexion" >
                <h1 className="connexion__title">[ Zenika POC ]</h1>   
                <img src={logo} alt="" className="connexion__image" />

                {/* <div className="connexion__button" onClick={() => login()}>
                Sign in with Google 🚀
                </div> */}

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