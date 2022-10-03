// Imports
import './style.scss';
import { Link } from 'react-router-dom';


// Composant
function EditConsutant() {
    return (
        <main className="container__modifConsultant">
            <div className="form">
                <h1 className="form__title">Modify consulant</h1>
                <label for="firstname" className="form__label">First name</label>
                <input type="text" name="firstname" id="" className="form__input" value="Taaki" />
                <label for="lastname" className="form__label">Last name</label>
                <input type="text" name="lastname" id="" className="form__input" value="Nakagami" />
                <label for="start" className="form__label">At Zenika since :</label>
                <input type="date" name="start" id="" className="form__input" value="2015-10-10" />
                <label for="client" className="form__label">Currently at :</label>
                <input type="text" name="client" id="" className="form__input" value="Decathlon" />
                <label for="clientStart" className="form__label">Mission start</label>
                <input type="date" name="clientStart" id="" className="form__input" value="2022-01-15" />
                <label for="jaz" className="form__label">Number of JAZ</label>
                <input type="number" name="jaz" id="" className="form__input" value="12" />
                <label for="trainingGiven" className="form__label">Number of training given</label>
                <input type="number" name="trainingGiven" id="" className="form__input" value="4" />
                <label for="trainingReceived" className="form__label">Number of training received</label>
                <input type="number" name="trainingReceived" id="" className="form__input" value="7" />
                <a href="./consultant.html"><button className="form__button">Modify &#10004;</button></a>
            </div>
        </main>
    )
};

// Export
export default EditConsutant;