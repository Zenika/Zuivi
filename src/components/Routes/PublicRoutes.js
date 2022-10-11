import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const isLogged = localStorage.getItem('isLogged');

  return isLogged ? <Navigate to="/overview" /> : children;
};

export default PublicRoutes;