// Imports
import './style.scss';
import { useSelector } from 'react-redux';


// Composant
function EditConsutant() {
    const { consulantById } = userSelector((state) => state.user)
    const consultant = useSelector((state) => state.manageConsultant)
    console.log(consultant);
    const handleDelete = () => {

    }
    const handleModify = () => {
        
    }
    return (
        <main className="container__modifConsultant">
            <div className="form">
                <h1 className="form__title">Modify consulant</h1>
                <label htmlFor="firstname" className="form__label">First name</label>
                <input type="text" name="firstname" id="" className="form__input" value="Taaki" />
                <label htmlFor="lastname" className="form__label">Last name</label>
                <input type="text" name="lastname" id="" className="form__input" value="Nakagami" />
                <label htmlFor="start" className="form__label">At Zenika since :</label>
                <input type="date" name="start" id="" className="form__input" value="2015-10-10" />
                <label htmlFor="client" className="form__label">Currently at :</label>
                <input type="text" name="client" id="" className="form__input" value="Decathlon" />
                <label htmlFor="clientStart" className="form__label">Mission start</label>
                <input type="date" name="clientStart" id="" className="form__input" value="2022-01-15" />
                <label htmlFor="jaz" className="form__label">Number of JAZ</label>
                <input type="number" name="jaz" id="" className="form__input" value="12" />
                <label htmlFor="trainingGiven" className="form__label">Number of training given</label>
                <input type="number" name="trainingGiven" id="" className="form__input" value="4" />
                <label htmlFor="trainingReceived" className="form__label">Number of training received</label>
                <input type="number" name="trainingReceived" id="" className="form__input" value="7" />
                <div className='form__buttons'>
                    <button onClick={handleModify} className="form__button">Modify &#10004;</button>
                    <button onClick={handleDelete} className="form__button">Delete &#9003;</button>
                </div>
            </div>
        </main>
    )
};

// Export
export default EditConsutant;