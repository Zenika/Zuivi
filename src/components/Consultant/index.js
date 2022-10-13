// Imports
import './style.scss';
import editIcon from '../../assets/images/icons8-modifier-60.png'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConsultantById } from '../../actions/getConsultantById';


// Composant
function Consultant() {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getConsultantById(params.id))
    }, [])

    const { consultantById } = useSelector((state) => state.consultant)

    return (
        <main className="container__consultant">

        {
            consultantById &&
            <>
                <div className="left">
                    <div className="consultant">
                        <img className="consultant__picture" src={consultantById.avatar} alt="" />
                        <div className="consultant__name">
                            <div className="consultant__firstName">{consultantById.firstname}</div>
                            <div className="consultant__lastName">{consultantById.lastname}</div>
                        </div>
                    </div>
                    
                    <div className="infos">
                        At Zenika from : {consultantById.start_z}<br />
                        Currently at : {consultantById.client}<br />
                        Since : {consultantById.start_client}<br />
                        JAZ days : {consultantById.jaz}<br />
                        Training given : {consultantById.training_given}<br />
                        Training received : {consultantById.training_received}<br />
                        <Link to={`/consultant/${consultantById.id}/edit`}><img src={editIcon} className="infos__modif"></img></Link>
                    </div>
            
                    <div className="trackingInfos">
                        <div className="tracking__status">Tracking status :</div>
                        <div className={`tracking__${consultantById.tracking_status}`}> {consultantById.tracking_status}</div>
                    </div>
            
                    <Link to="/meetingpoint"><button className="newMeetingPoint">Add meeting point</button></Link>
                </div>
                <div className="lastsMeetings">
                    <h2 className="lastsMeetings__title">Lasts meeting points</h2>

                    {
                        consultantById.meeting_points.length > 0 &&
                        consultantById.meeting_points.map((meeting_point) => (
                            <div key={consultantById.meeting_points.id} className="lastsMeetings__infos">
                                Type : {meeting_point.type}<br />
                                Date : {meeting_point.date}<br />
                                Comment : {meeting_point.comment}
                            </div>
                        ))
                    }

                </div>
            </>
        }
        </main>
    )
};

// Export
export default Consultant;