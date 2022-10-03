// Imports
import './style.scss';
import { Link } from 'react-router-dom';


// Composant
function MeetingPoint() {
    return (
        <main className="container__newMeeting">
        <div className="form">
            <h1 className="form__title">Add a new meeting point</h1>
            <label for="consultant" className="form__label">Consultant</label>
            <select name="consultant" id="" className="form__select">
                <option value="">--- Please choose an option ---</option>
                <option value="Taaki">Taaki</option>
                <option value="Brad">Brad</option>
                <option value="Enea">Enea</option>
                <option value="Jack">Jack</option>
                <option value="Johann">Johann</option>
                <option value="Pol">Pol</option>
                <option value="Tatsuki">Tatsuki</option>
                <option value="Denis">Denis</option>
                <option value="Jorge">Jorge</option>
                <option value="Maverick">Maverick</option>
                <option value="Fabio">Fabio</option>
                <option value="Darryn">Darryn</option>
                <option value="Jaume">Jaume</option>
                <option value="Aleix">Aleix</option>
                <option value="Anna">Anna</option>
                <option value="Augusto">Augusto</option>
                <option value="Pecco">Pecco</option>
                <option value="Maria">Maria</option>
                <option value="Toprak">Toprak</option>
                <option value="Jake">Jake</option>
            </select>
            <label for="meeting" className="form__label">Type of meeting</label>
            <select name="meeting" id="" className="form__select">
                <option value="">--- Please choose an option ---</option>
                <option value="Career-Path">Career path</option>
                <option value="Entretien§annuel">Entretien annuel</option>
            </select>
            <label for="comment" className="form__label">Comment</label>
            <textarea name="comment" id="" cols="50" rows="20" className="form__comment"></textarea>
            <Link to="/"><button className="form__button">Add +</button></Link>
        </div>
    </main>
    )
};

// Export
export default MeetingPoint;