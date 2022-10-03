// Imports
import './style.scss';
import profilePicture from '../../assets/images/takaaki-nakagami-lcr-honda-1.jpg';
import editIcon from '../../assets/images/icons8-modifier-60.png'
import { Link } from 'react-router-dom';


// Composant
function Consultant() {
    return (
        <main className="container__consultant">
            <div className="left">
                <div className="consultant">
                    <img className="consultant__picture" src={profilePicture} alt="" />
                    <div className="consultant__name">
                        <div className="consultant__firstName">Taaki</div>
                        <div className="consultant__lastName">Nakagami</div>
                    </div>
                </div>
                
                <div className="infos">
                    At Zenika from : october 10th, 2015<br />
                    Currently at : Decathlon<br />
                    Since : january 15th, 2021<br />
                    JAZ days : 12<br />
                    Training given : 4<br />
                    Training received : 7<br />
                    <Link to="/consultant/edit"><img src={editIcon} className="infos__modif"></img></Link>
                </div>
        
                <div className="trackingInfos">
                    <div className="tracking__status">Tracking status :</div>
                    <div className="tracking__urgent">Urgent</div>
                </div>
        
                <Link to="/meetingpoint"><button className="newMeetingPoint">Add meeting point</button></Link>
            </div>
            <div className="lastsMeetings">
                <h2 className="lastsMeetings__title">Lasts meeting points</h2>
                <div className="lastsMeetings__infos">
                    Type : Career path<br />
                    Date : july 11th, 2022<br />
                    Comment : "He wants<br />
                    to conquer the world !"
                </div>
                <div className="lastsMeetings__infos">
                    Type : Technical meeting<br />
                    Date : july 11th, 2022<br />
                    Comment : "He wants<br />
                    to conquer the world !"
                </div>
            </div>
        </main>
    )
};

// Export
export default Consultant;