import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const isLogged = sessionStorage.getItem('isLogged');

    // si isLogged n'existe pas dans le sessionStorage vous avez pas accès à toutes les routes vous êtes donc rediriger à l'accueil/connexion 
  return isLogged ? <Navigate to="/overview" /> : children;
};

export default PublicRoutes;