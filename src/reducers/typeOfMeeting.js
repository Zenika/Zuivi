import { SAVE_TYPE_OF_MEETING } from "../actions/getTypeOfMeeting";

  
  export const initialState = {
    typeOfMeeting: {},
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_TYPE_OF_MEETING:
        return {
          ...state,
          typeOfMeeting: action.typeOfMeeting,
        };

      default:
        return state;
    }
  };
  
  export default reducer;