import axios from "axios";
import { changeConsultantsIsLoading, GET_CONSULTANTS, saveConsultants } from "../actions/getConsultants";

const getConsultantMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_CONSULTANTS: {

          axios.get('http://localhost:3000/consultants')
            .then((response) => {
              store.dispatch(saveConsultants(response.data));
              store.dispatch(changeConsultantsIsLoading(false));
            });
    
          break;
        }
    
        default:
      }

    next(action);

    
}

export default getConsultantMiddleware;