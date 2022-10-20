import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isLogged = sessionStorage.getItem('isLogged');

  // si isLogged existe dans le sessionStorage vous avez à toutes les routes sinon vous êtes rediriger à l'accueil/connexion 
  return isLogged ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;