

import { SAVE_CONSULTANTS } from "../actions/getConsultants";

  
  export const initialState = {
    consultants: {},
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_CONSULTANTS:
        return {
          ...state,
          consultants: action.consultants,
        };

      default:
        return state;
    }
  };
  
  export default reducer;