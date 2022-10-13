import axios from "axios";
import { logIn } from "../actions/authentication";
import { REGISTER } from "../actions/register";


const registerMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case REGISTER: {

            const { email, password } = store.getState().user;
            axios.post('http://localhost:3000/register',
                {
                    email: email,
                    password: password
                })

                .then((response) => {
                    store.dispatch(logIn());
                });
        
            break;
        }
      
    
        default:
      }

    next(action);

    
}

export default registerMiddleware;