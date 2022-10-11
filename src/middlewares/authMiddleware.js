import axios from "axios";
import { LOG_IN, saveUserData } from "../actions/authentication";



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
                    localStorage.setItem('JWT-Acces-Token', response.data.accessToken);
                    localStorage.setItem('isLogged', true);
                });
        
            break;
        }
    
        default:
      }

    next(action);

    
}

export default authMiddleware;