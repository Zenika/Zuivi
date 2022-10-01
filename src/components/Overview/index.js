// Imports
import './style.scss';
import zenika from 'src/assets/images/Vertical_White_Logo Zenika.png';


// Composant
function Overview() {
    return (
        <main className="container__index">
            <div className="leftPanel">
                <img className="leftPanel__image" src={zenika} alt="" />
                <a href="./newMeetingPoint.html"><button className="leftPanel__button">New meeting point</button></a>
                <a href="./newConsulant.html"><button className="leftPanel__button">New consultant</button></a>
            </div>
            <div className="overview">
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--urgent">Taaki</div>
                    <div className="tracking__date tracking__date--urgent">16/07</div>
                </a>

                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--urgent">Brad</div>
                    <div className="tracking__date tracking__date--urgent">18/07</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--urgent">Enea</div>
                    <div className="tracking__date tracking__date--urgent">24/07</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--urgent">Jack</div>
                    <div className="tracking__date tracking__date--urgent">29/07</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--follow">Johann</div>
                    <div className="tracking__date tracking__date--follow">02/08</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--follow">Pol</div>
                    <div className="tracking__date tracking__date--follow">08/08</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--follow">Tatsuki</div>
                    <div className="tracking__date tracking__date--follow">11/08</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--follow">Denis</div>
                    <div className="tracking__date tracking__date--follow">11/08</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--follow">Jorge</div>
                    <div className="tracking__date tracking__date--follow">18/08</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--follow">Maverick</div>
                    <div className="tracking__date tracking__date--follow">21/08</div>
                </a>
        
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--follow">Fabio</div>
                    <div className="tracking__date tracking__date--follow">21/08</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--follow">Darryn</div>
                    <div className="tracking__date tracking__date--follow">28/08</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--follow">Jaume</div>
                    <div className="tracking__date tracking__date--follow">30/08</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--good">Aleix</div>
                    <div className="tracking__date tracking__date--good">02/09</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--good">Anna</div>
                    <div className="tracking__date tracking__date--good">02/09</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--good">Augusto</div>
                    <div className="tracking__date tracking__date--good">05/09</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--good">Pecco</div>
                    <div className="tracking__date tracking__date--good">08/09</div>
                </a>
        
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--good">Maria</div>
                    <div className="tracking__date tracking__date--good">11/09</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--good">Toprak</div>
                    <div className="tracking__date tracking__date--good">17/09</div>
                </a>
                <a href="./consultant.html" className="tracking">
                    <div className="tracking__consultant tracking__consultant--good">Jake</div>
                    <div className="tracking__date tracking__date--good">20/09</div>
                </a>
            </div>

        </main>
    )
};

// Export
export default Overview;