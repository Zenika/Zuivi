import axios from "axios";
import { CONSULTANT_CREATION } from "../actions/manageConsultant";

const manageConsultantMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case CONSULTANT_CREATION: {

            const {
                firstname,
                lastname,
                start_z,
                client,
                start_client,
                jaz,
                training_given,
                training_received
              } = store.getState().manageConsultant;

            axios.post(
                `http://localhost:3000/consultants`,
                {
                    "firstname": firstname,
                    "lastname": lastname,
                    "start_z": start_z,
                    "client": client,
                    "start_client": start_client,
                    "jaz": jaz,
                    "training_given": training_given,
                    "training_received": training_received,
                }
                )
                .then((response) => {
                    if(response.status === 201) {
                        console.log(response.status, response.data);
                    }
                });
        
            break;
        }
        
        default:
      }

    next(action);

    
}

export default manageConsultantMiddleware;