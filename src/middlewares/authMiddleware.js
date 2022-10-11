import axios from "axios";
import { changeRedirection, LOG_IN, LOG_OUT, saveUserData } from "../actions/authentication";



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
                    sessionStorage.setItem('JWT-Access-Token', response.data.accessToken);
                    sessionStorage.setItem('isLogged', true);
                    store.dispatch(changeRedirection('/overview'))
                });
        
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