// Imports
import './style.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


// Composant
function MeetingPoint() {
    const { consultants } = useSelector((state) => state.consultant);
    const { typeOfMeeting } = useSelector((state) => state.typeOfMeeting);

    return (
        <main className="container__newMeeting">
        <div className="form">
            <h1 className="form__title">Add a new meeting point</h1>
            <label htmlFor="consultant" className="form__label">Consultant</label>
            <select name="consultant" id="" className="form__select">
                <option value="">--- Please choose an option ---</option>
                
                {consultants.length > 0 &&
                consultants.map((consultant) => (
                    <option key={consultant.id}  value={consultant.id}>{consultant.firstname}</option>
                ))}

            </select>
            <label htmlFor="meeting" className="form__label">Type of meeting</label>
            <select name="meeting" id="" className="form__select">
                <option value="">--- Please choose an option ---</option>

                {typeOfMeeting.length > 0 &&
                typeOfMeeting.map((meetingPoint) => (
                    <option key={meetingPoint.id} value={meetingPoint.id}>{meetingPoint.name}</option>
                ))}

            </select>
            <label htmlFor="comment" className="form__label">Comment</label>
            <textarea name="comment" id="" cols="50" rows="20" className="form__comment"></textarea>
            <Link to="/"><button className="form__button">Add +</button></Link>
        </div>
    </main>
    )
};

// Export
export default MeetingPoint;