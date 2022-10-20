import { CHANGE_REDIRECTION } from "../actions/authentication";
  
  export const initialState = {
    redirection: null,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        
        case CHANGE_REDIRECTION:
          return {
            ...state,
            redirection: action.redirection
          }
        
      default:
        return state;

    }
  };
  
  export default reducer;