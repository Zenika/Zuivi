import './style.scss';
import zenikanard from '../../assets/images/zenikanardd.png';
import { Link } from 'react-router-dom';


function Error () {

    return (
        <div className="error">
            <h1 className="error__title">[ Error 404 ]</h1>
            <h1 className="error__subtitle"> page introuvable</h1>
            <img src={zenikanard} alt="" className="error__image" />
            <Link to={'/overview'} ><button className="error__button">Back to a better world</button></Link>
        </div>
    )
};

export default Error;