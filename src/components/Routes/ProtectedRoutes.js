import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isLogged = localStorage.getItem('isLogged');

  return isLogged ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;