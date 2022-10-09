import { CHANGE_CONSULTANT_CREATION_FIELD, CLEAN_CONSULTANT_CREATION_STATE } from "../actions/manageConsultant";

  
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
        
        case CLEAN_CONSULTANT_CREATION_STATE : 
            return {
                ...state,
                firstname: '',
                lastname: '',
                start_z: '',
                client: '',
                start_client: '',
                jaz: 0,
                training_given: 0,
                training_received: 0,
            }
        default:
            return state;

    }
  };
  
  export default reducer;