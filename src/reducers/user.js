import { CHANGE_LOGIN_FIELD, SAVE_USER_DATA } from "../actions/authentication";


  
  export const initialState = {
    email: '',
    password: ''
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_LOGIN_FIELD:
          return {
            ...state,
            [action.fieldIdentifier]: action.value,
          };

        case SAVE_USER_DATA:
        return {
            ...state,
            connectedUser: action.user.user,
        };

      default:
        return state;

    }
  };
  
  export default reducer;