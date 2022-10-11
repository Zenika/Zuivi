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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getConsultants } from '../../actions/getConsultants';
import { getTypeOfMeeting } from '../../actions/getTypeOfMeeting';


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
        <Route path='/consultant/:id' element={<Consultant />} /> //TODO = dynamiser slug : 
        <Route path='/consultant/:id/edit' element={<EditConsutant />} />
        {/* <Route path='*' element={} /> */}

      </Routes>

    </div>
  );
}

// == Export
export default App;
