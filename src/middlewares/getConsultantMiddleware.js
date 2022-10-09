import axios from "axios";
import { changeConsultantsIsLoading, GET_CONSULTANTS, saveConsultants } from "../actions/getConsultants";

const getConsultantMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_CONSULTANTS: {
          const { consultantsIsLoading } = store.getState().consultant;

          axios.get('http://localhost:3000/consultants')
            .then((response) => {
                // console.log(response.data);
              store.dispatch(saveConsultants(response.data));
              store.dispatch(changeConsultantsIsLoading(consultantsIsLoading));
            });
    
          break;
        }
    
        default:
      }

    next(action);

    
}

export default getConsultantMiddleware;