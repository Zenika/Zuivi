// Imports
import './style.scss';
import zenika from 'src/assets/images/Vertical_White_Logo Zenika.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


// Composant
function Overview() {
    const { consultants } = useSelector((state) => state.consultant);
    return (
        <main className="container__index">
            <div className="leftPanel">
                <img className="leftPanel__image" src={zenika} alt="" />
                <Link to="/meetingpoint"><button className="leftPanel__button">New meeting point</button></Link>
                <Link to="/newconsultant"><button className="leftPanel__button">New consultant</button></Link>
            </div>
            <div className="overview">

                { consultants.length > 0 &&
                consultants.map((consultant) => (
                    <Link key={consultant.id} to={`/consultant/${consultant.id}`} className="tracking">
                        <div className={`tracking__consultant tracking__consultant--${consultant.tracking_status}`}>{consultant.firstname}</div>
                        <div className={`tracking__date tracking__date--${consultant.tracking_status}`}>{consultant.meeting_points[consultant.meeting_points.length - 1].date}</div>
                    </Link>
                ))}

            </div>

        </main>
    )
};

// Export
export default Overview;