import axios from "axios";
import { GET_CONSULTANTS, saveConsultants } from "../actions/getConsultants";

const getConsultantMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_CONSULTANTS: {
          axios.get('http://localhost:3000/consultants')
            .then((response) => {
                // console.log(response.data);
              store.dispatch(saveConsultants(response.data));
            });
    
          break;
        }
    
        default:
      }

    next(action);

    
}

export default getConsultantMiddleware;