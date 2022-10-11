// == Import
import './styles.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Overview from '../Overview';
import MeetingPoint from '../MeetingPoint';
import NewConsultant from '../NewConsultant';
import Consultant from '../Consultant';
import EditConsutant from '../EditConsultant';
import Connexion from '../Connexion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConsultants } from '../../actions/getConsultants';
import { getTypeOfMeeting } from '../../actions/getTypeOfMeeting';
import PublicRoutes from '../Routes/PublicRoutes';
import ProtectedRoutes from '../Routes/ProtectedRoutes';


// == Composant
function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redirection } = useSelector((state) => state.user);
  
  useEffect(() => {
    if (redirection !== null) {
      navigate(redirection);
    }
  }, [redirection]);

  useEffect(() => {
    dispatch(getConsultants());
    dispatch(getTypeOfMeeting())
  }, []);

  return (
    <div className="app">
      <Routes>

        <Route path='/' element={
          <PublicRoutes>
            <Connexion />
          </PublicRoutes>
        } />

        <Route path='/overview' element={
          <ProtectedRoutes>
            <Header />
            <Overview />
          </ProtectedRoutes>
        } />

        <Route path='/meetingpoint' element={
          <ProtectedRoutes>
            <Header />
            <MeetingPoint />
          </ProtectedRoutes>
        } />

        <Route path='/newconsultant' element={
          <ProtectedRoutes>
            <Header />
            <NewConsultant />
          </ProtectedRoutes>
       } />

        <Route path='/consultant/:id' element={
          <ProtectedRoutes>
            <Header />
            <Consultant />
          </ProtectedRoutes>
        } />

        <Route path='/consultant/:id/edit' element={
          <ProtectedRoutes>
            <Header />
            <EditConsutant />
          </ProtectedRoutes>
        } />

        {/* <Route path='*' element={} /> */} //TODO ERRRRRRROOOORRRRR Page

      </Routes>

    </div>
  );
}

// == Export
export default App;
