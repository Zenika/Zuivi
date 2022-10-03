// Imports
import './style.scss';
import { Link } from 'react-router-dom';


// Composant
function NewConsultant() {
    return (
        <main class="container__newConsultant">
            <div class="form">
                <h1 class="form__title">Add a new consulant</h1>
                <label for="firstname" class="form__label">First name</label>
                <input type="text" name="firstname" id="" class="form__input" />
                <label for="lastname" class="form__label">Last name</label>
                <input type="text" name="lastname" id="" class="form__input" />
                <label for="start" class="form__label">At Zenika since :</label>
                <input type="date" name="start" id="" class="form__input" />
                <label for="client" class="form__label">Currently at :</label>
                <input type="text" name="client" id="" class="form__input" />
                <label for="clientStart" class="form__label">Mission start</label>
                <input type="date" name="clientStart" id="" class="form__input" />
                <label for="jaz" class="form__label">Number of JAZ</label>
                <input type="number" name="jaz" id="" class="form__input" value="0" />
                <label for="trainingGiven" class="form__label">Number of training given</label>
                <input type="number" name="trainingGiven" id="" class="form__input" value="0" />
                <label for="trainingReceived" class="form__label">Number of training received</label>
                <input type="number" name="trainingReceived" id="" class="form__input" value="0" />
                <Link to="/"><button class="form__button">Add +</button></Link>
            </div>
        </main>
    )
};

// Export
export default NewConsultant;