// Imports
import './style.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeConsultantCreationField, consultantCreation } from '../../actions/manageConsultant';


// Composant
function NewConsultant() {
    const dispatch = useDispatch();
    const consultant = useSelector((state) => state.manageConsultant);
    console.log(consultant);
    const handleChange = (event) => {
        dispatch(changeConsultantCreationField(event.target.value, event.target.name))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(consultantCreation());
    }

    return (
        <main className="container__newConsultant">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form__title">Add a new consulant</h1>
                <label htmlFor="firstname" className="form__label">First name</label>
                <input type="text" name="firstname" id="" className="form__input" value={consultant.firstname} onChange={handleChange} />
                <label htmlFor="lastname" className="form__label">Last name</label>
                <input type="text" name="lastname" id="" className="form__input" value={consultant.lastname} onChange={handleChange} />
                <label htmlFor="start" className="form__label">At Zenika since :</label>
                <input type="date" name="start_z" id="" className="form__input" value={consultant.start_z} onChange={handleChange} />
                <label htmlFor="client" className="form__label">Currently at :</label>
                <input type="text" name="client" id="" className="form__input" value={consultant.client} onChange={handleChange} />
                <label htmlFor="clientStart" className="form__label">Mission start</label>
                <input type="date" name="start_client" id="" className="form__input" value={consultant.start_client} onChange={handleChange} />
                <label htmlFor="jaz" className="form__label">Number of JAZ</label>
                <input type="number" name="jaz" id="" className="form__input" value={consultant.jaz} onChange={handleChange} />
                <label htmlFor="trainingGiven" className="form__label">Number of training given</label>
                <input type="number" name="training_given" id="" className="form__input" value={consultant.training_given} onChange={handleChange} />
                <label htmlFor="trainingReceived" className="form__label">Number of training received</label>
                <input type="number" name="training_received" id="" className="form__input" value={consultant.training_received} onChange={handleChange} />
                {/* <Link to="/"><button type='submit' className="form__button">Add +</button></Link> */}
                <button type='submit' className="form__button">Add +</button>
            </form>
        </main>
    )
};

// Export
export default NewConsultant;

//        