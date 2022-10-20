import { changeRedirection, LOG_OUT } from "../actions/authentication";



const authMiddleware = (store) => (next) => (action) => {
    switch (action.type) {

        case LOG_OUT: {
            sessionStorage.removeItem('JWT-Access-Token');
            sessionStorage.removeItem('isLogged');
            store.dispatch(changeRedirection('/'));
            break;
          }
      
    
        default:
      }

    next(action);

    
}

export default authMiddleware;