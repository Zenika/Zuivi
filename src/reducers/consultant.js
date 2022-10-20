import { SAVE_CONSULTANT_BY_ID } from "../actions/getConsultantById";
import { CHANGE_CONSULTANTS_IS_LOADING, SAVE_CONSULTANTS } from "../actions/getConsultants";

  
  export const initialState = {
    consultants: {},
    consultantsIsLoading: true,

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

        case CHANGE_CONSULTANTS_IS_LOADING:
          return {
            ...state,
            consultantsIsLoading: action.consultantsIsLoading,
          }
        

      default:
        return state;

    }
  };
  
  export default reducer;