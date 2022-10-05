// Imports
import './style.scss';
import profilePicture from '../../assets/images/takaaki-nakagami-lcr-honda-1.jpg';
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
            consultantById.length > 0 &&
            <>
                  <div className="left">
                    <div className="consultant">
                        <img className="consultant__picture" src={consultantById[0].avatar} alt="" />
                        <div className="consultant__name">
                            <div className="consultant__firstName">{consultantById[0].firstname}</div>
                            <div className="consultant__lastName">{consultantById[0].lastname}</div>
                        </div>
                    </div>
                    
                    <div className="infos">
                        At Zenika from : {consultantById[0].start_z}<br />
                        Currently at : {consultantById[0].client}<br />
                        Since : {consultantById[0].start_client}<br />
                        JAZ days : {consultantById[0].jaz}<br />
                        Training given : {consultantById[0].training_given}<br />
                        Training received : {consultantById[0].training_received}<br />
                        <Link to="/consultant/edit"><img src={editIcon} className="infos__modif"></img></Link>
                    </div>
            
                    <div className="trackingInfos">
                        <div className="tracking__status">Tracking status :</div>
                        <div className={`tracking__${consultantById[0].tracking_status}`}>{consultantById[0].tracking_status}</div>
                    </div>
            
                    <Link to="/meetingpoint"><button className="newMeetingPoint">Add meeting point</button></Link>
                </div>
                <div className="lastsMeetings">
                    <h2 className="lastsMeetings__title">Lasts meeting points</h2>

                    {
                        consultantById[0].meeting_points.length > 0 &&
                        consultantById[0].meeting_points.map((meeting_point) => (
                            <div className="lastsMeetings__infos">
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