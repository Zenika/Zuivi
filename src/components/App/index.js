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
import Error from '../Error';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PublicRoutes from '../Routes/PublicRoutes';
import ProtectedRoutes from '../Routes/ProtectedRoutes';
import { GoogleOAuthProvider } from '@react-oauth/google';


// == Composant
function App() {
  const navigate = useNavigate();
  const { redirection } = useSelector((state) => state.user);
 
  useEffect(() => {
    if (redirection !== null) {
      navigate(redirection);
    }
  }, [redirection]);

  return (
    <div className="app">
      
      <GoogleOAuthProvider clientId="714610770733-ii5rik7tn9irduhq447cdifqmd5rfj88.apps.googleusercontent.com">
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

        <Route path='*' element={<Error />} />

      </Routes>
      </GoogleOAuthProvider>

    </div>
  );
}

// == Export
export default App;
