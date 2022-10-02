// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Overview from '../Overview';

// == Composant
function App() {
  return (
    <div classNameName="app">
      <Header />
      <Routes>
        <Route path='/' element={<Overview />} />
        {/* <Route path='/meetingpoint' element={} />
        <Route path='/newprofile' element={} />
        <Route path='/profile/:id/:name' element={} />
        <Route path='*' element={} /> */}

      </Routes>

    </div>
  );
}

// == Export
export default App;
