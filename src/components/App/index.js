// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Overview from '../Overview';
import MeetingPoint from '../MeetingPoint';
import NewConsultant from '../NewConsultant';
import Consultant from '../Consultant';
import EditConsutant from '../EditConsultant';
import Connexion from '../Connexion';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/meetingpoint' element={<MeetingPoint/>} />
        <Route path='/newconsultant' element={<NewConsultant />} />
        <Route path='/consultant' element={<Consultant />} /> //TODO = dynamiser slug : 
        <Route path='/consultant/edit' element={<EditConsutant />} />
        {/* <Route path='*' element={} /> */}

      </Routes>

    </div>
  );
}

// == Export
export default App;
