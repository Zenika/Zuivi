import axios from "axios";
import { changeRedirection, cleanAuthField, LOG_IN, LOG_OUT, saveUserData } from "../actions/authentication";



const authMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case LOG_IN: {

                sessionStorage.setItem('JWT-Access-Token', credentialResponse.credential);
                sessionStorage.setItem('isLogged', true);
                store.dispatch(changeRedirection('/overview'));
        
            break;
        }

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