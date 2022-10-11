// Imports
import './style.scss';
import zenika from 'src/assets/images/Vertical_White_Logo Zenika.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RingLoader } from 'react-spinners';
import { useEffect } from 'react';
import { getConsultants } from '../../actions/getConsultants';
import { getTypeOfMeeting } from '../../actions/getTypeOfMeeting';


// Composant
function Overview() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getConsultants());
      dispatch(getTypeOfMeeting())
    }, []);

    const { consultants, consultantsIsLoading } = useSelector((state) => state.consultant);
    console.log(consultantsIsLoading, consultants);
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
    const color = "#bf046e"

    return (
        <main className="container__index">
            <div className="leftPanel">
                <img className="leftPanel__image" src={zenika} alt="" />
                <Link to="/meetingpoint"><button className="leftPanel__button">New meeting point</button></Link>
                <Link to="/newconsultant"><button className="leftPanel__button">New consultant</button></Link>
            </div>
            <div className="overview">

                { consultantsIsLoading === true
                ?
                <RingLoader color={color} loading={consultantsIsLoading} cssOverride={override} size={150} aria-label="Ring Loader" />
                :
                consultants.map((consultant) => (
                    <Link key={consultant.id} to={`/consultant/${consultant.id}`} className="tracking">
                        <div className={`tracking__consultant tracking__consultant--${consultant.tracking_status}`}>{consultant.firstname}</div>
                        <div className={`tracking__date tracking__date--${consultant.tracking_status}`}>{consultant.meeting_points[consultant.meeting_points.length - 1].date}</div>
                    </Link>
                ))
                }

            </div>

        </main>
    )
};

// Export
export default Overview;