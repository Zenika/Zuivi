import axios from "axios";
import { LOG_IN, LOG_OUT, saveUserData } from "../actions/authentication";



const authMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case LOG_IN: {

            const { email, password } = store.getState().user;
            axios.post('http://localhost:3000/login',
                {
                    email: email,
                    password: password
                })

                .then((response) => {
                    store.dispatch(saveUserData(response.data));
                    localStorage.setItem('JWT-Access-Token', response.data.accessToken);
                    localStorage.setItem('isLogged', true);
                });
        
            break;
        }

        case LOG_OUT: {
            // Remove token from local storage
            localStorage.removeItem('JWT-Access-Token');
            localStorage.removeItem('isLogged');
            // store.dispatch(changeRedirection('/'));
            break;
          }
      
    
        default:
      }

    next(action);

    
}

export default authMiddleware;