// Imports
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeConsultantManageField } from '../../actions/manageConsultant';


// Composant
function EditConsutant() {
    const dispatch = useDispatch();
    const { consultantById } = useSelector((state) => state.consultant)
    const consultant = useSelector((state) => state.manageConsultant)
    const handleChange = (event) => {
        dispatch(changeConsultantManageField(event.target.value, event.target.name))
    }
    const handleDelete = () => {

    }
    const handleModify = () => {
        
    }
    return (
        <main className="container__modifConsultant">
            <div className="form">
                <h1 className="form__title">Modify consulant</h1>
                <label htmlFor="firstname" className="form__label">First name</label>
                <input onChange={handleChange} type="text" name="firstname" id="" className="form__input" value={consultantById.firstname} />
                <label htmlFor="lastname" className="form__label">Last name</label>
                <input onChange={handleChange} type="text" name="lastname" id="" className="form__input" value={consultantById.lastname} />
                <label htmlFor="start_z" className="form__label">At Zenika since :</label>
                <input onChange={handleChange} type="date" name="start_z" id="" className="form__input" value={consultantById.start_z} />
                <label htmlFor="client" className="form__label">Currently at :</label>
                <input onChange={handleChange} type="text" name="client" id="" className="form__input" value={consultantById.client} />
                <label htmlFor="start_client" className="form__label">Mission start</label>
                <input onChange={handleChange} type="date" name="start_client" id="" className="form__input" value={consultantById.start_client} />
                <label htmlFor="jaz" className="form__label">Number of JAZ</label>
                <input onChange={handleChange} type="number" name="jaz" id="" className="form__input" value={consultantById.jaz} />
                <label htmlFor="training_given" className="form__label">Number of training given</label>
                <input onChange={handleChange} type="number" name="training_given" id="" className="form__input" value={consultantById.training_given} />
                <label htmlFor="training_received" className="form__label">Number of training received</label>
                <input onChange={handleChange} type="number" name="training_received" id="" className="form__input" value={consultantById.training_received} />
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