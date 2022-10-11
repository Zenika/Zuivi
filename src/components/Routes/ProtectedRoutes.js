import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isLogged = sessionStorage.getItem('isLogged');

  return isLogged ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;