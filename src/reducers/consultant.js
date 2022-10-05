import { SAVE_CONSULTANT_BY_ID } from "../actions/getConsultantById";
import { SAVE_CONSULTANTS } from "../actions/getConsultants";

  
  export const initialState = {
    consultants: {},
    consultantById: {},
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_CONSULTANTS:
        return {
          ...state,
          consultants: action.consultants,
        };

        case SAVE_CONSULTANT_BY_ID:
        return {
          ...state,
          consultantById: action.consultantById,
        };

      default:
        return state;

    }
  };
  
  export default reducer;