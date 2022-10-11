import { CHANGE_CONSULTANT_CREATION_FIELD } from "../actions/manageConsultant";

  
  export const initialState = {
    "firstname": "",
    "lastname": "",
    "start_z": "",
    "client": "",
    "start_client": "",
    "jaz": 0,
    "training_given": 0,
    "training_received": 0,

  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_CONSULTANT_CREATION_FIELD :
            return {
                ...state,
                [action.fieldIdentifier]: action.value,
            };
        
        default:
            return state;

    }
  };
  
  export default reducer;