import axios from "axios";
import { GET_CONSULTANT_BY_ID, saveConsultantById } from "../actions/getConsultantById";


const getConsultantMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_CONSULTANT_BY_ID: {
          axios.get(`http://localhost:3000/consultants/${action.id}`)
            .then((response) => {
              // console.log(response.data);
              store.dispatch(saveConsultantById(response.data));
            });
    
          break;
        }
    
        default:
      }

    next(action);

    
}

export default getConsultantMiddleware;